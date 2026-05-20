import { MUSIC_RELEASES, VIDEOS } from '../data/homeContent';

function resolveAssetUrl(path) {
  const base = process.env.PUBLIC_URL || '';
  let src = path;
  const match = String(path).match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  if (match) {
    src = match[1];
  }
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  return `${base}${src.startsWith('/') ? src : `/${src}`}`;
}

export function getMusicAndVideoImageUrls() {
  const music = MUSIC_RELEASES.map(release => resolveAssetUrl(release.image));
  const video = VIDEOS.map(item => resolveAssetUrl(item.image));
  return [...music, ...video];
}

/** Warm browser cache for modal thumbnails (fire-and-forget). */
export function preloadModalImages() {
  getMusicAndVideoImageUrls().forEach(src => {
    const img = new Image();
    img.decoding = 'async';
    img.src = src;
  });
}
