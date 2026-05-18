<?php
/**
 * Заказ винила: POST JSON { "email": "email@example.com" }, опционально "hp" honeypot.
 * Уведомление только в Telegram (Bot API sendMessage).
 *
 * Настройка (один из способов):
 * — Файл send-vinyl-telegram.local.php (не коммитить), вернуть массив:
 *   return ['bot_token' => '...', 'chat_id' => '123456789'];
 * — Или переменные окружения: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID.
 *
 * Токен: @BotFather → /newbot. chat_id: напишите боту, затем откройте
 * https://api.telegram.org/bot<ТОКЕН>/getUpdates и найдите "chat":{"id":...}
 * (у групп id может быть отрицательным).
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

if (!empty($data['hp'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$email = isset($data['email']) ? trim((string) $data['email']) : '';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => 'Invalid email',
    ]);
    exit;
}

$telegramText = "🎵 Vinyl order — Past Present Future\n\nEmail: {$email}";

/**
 * @return array{bot_token: string, chat_id: string}|null
 */
function vinyl_telegram_config(): ?array
{
    $local = __DIR__ . '/send-vinyl-telegram.local.php';
    if (is_readable($local)) {
        $cfg = include $local;
        if (is_array($cfg) && !empty($cfg['bot_token']) && isset($cfg['chat_id']) && $cfg['chat_id'] !== '') {
            return [
                'bot_token' => trim((string) $cfg['bot_token']),
                'chat_id' => trim((string) $cfg['chat_id']),
            ];
        }
    }

    $token = getenv('TELEGRAM_BOT_TOKEN');
    $chat = getenv('TELEGRAM_CHAT_ID');
    if (!empty($token) && $chat !== false && $chat !== '') {
        return [
            'bot_token' => trim($token),
            'chat_id' => trim((string) $chat),
        ];
    }

    return null;
}

/**
 * @return array{ok: bool, error?: string}
 */
function vinyl_send_telegram(string $botToken, string $chatId, string $text): array
{
    $url = 'https://api.telegram.org/bot' . $botToken . '/sendMessage';
    $payload = json_encode([
        'chat_id' => $chatId,
        'text' => $text,
        'disable_web_page_preview' => true,
    ], JSON_UNESCAPED_UNICODE);

    $response = null;

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 20,
        ]);
        $response = curl_exec($ch);
        $curlErr = curl_error($ch);
        curl_close($ch);
        if ($response === false) {
            return ['ok' => false, 'error' => 'Telegram request failed: ' . $curlErr];
        }
    } else {
        $ctx = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/json\r\n",
                'content' => $payload,
                'timeout' => 20,
                'ignore_errors' => true,
            ],
        ]);
        $response = @file_get_contents($url, false, $ctx);
        if ($response === false) {
            return ['ok' => false, 'error' => 'Telegram request failed (enable curl or allow_url_fopen).'];
        }
    }

    $decoded = json_decode((string) $response, true);
    if (!is_array($decoded)) {
        return ['ok' => false, 'error' => 'Telegram returned invalid response.'];
    }
    if (!empty($decoded['ok'])) {
        return ['ok' => true];
    }
    $desc = isset($decoded['description']) ? (string) $decoded['description'] : 'Unknown error';

    return ['ok' => false, 'error' => 'Telegram: ' . $desc];
}

$tg = vinyl_telegram_config();
if ($tg === null) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'Telegram is not configured. Add send-vinyl-telegram.local.php with bot_token and chat_id, or set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID. See comments at the top of send-vinyl.php.',
    ]);
    exit;
}

$result = vinyl_send_telegram($tg['bot_token'], $tg['chat_id'], $telegramText);
if (!$result['ok']) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $result['error'] ?? 'Telegram send failed']);
    exit;
}

echo json_encode(['ok' => true]);
