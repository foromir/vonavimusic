import { useState, useEffect, useCallback } from "react";
import { VINYL_SLIDES, VINYL_ORDER_SCRIPT } from "../../data/homeContent";

export function useVinylModal(open) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    setSlideIndex(0);
    setEmail("");
    setHoneypot("");
    setSending(false);
    setSuccess(false);
    setError("");
  }, [open]);

  const slidePrev = useCallback(() => {
    setSlideIndex((prev) => (prev === 0 ? VINYL_SLIDES.length - 1 : prev - 1));
  }, []);

  const slideNext = useCallback(() => {
    setSlideIndex((prev) => (prev === VINYL_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const setSlideTo = useCallback((i) => setSlideIndex(i), []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const trimmed = email.trim();
      if (!trimmed) return;
      if (honeypot) return;

      setSending(true);
      setError("");
      setSuccess(false);
      try {
        const res = await fetch(VINYL_ORDER_SCRIPT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed, hp: honeypot }),
        });
        let data = {};
        try {
          data = await res.json();
        } catch (parseErr) {
          throw new Error(
            "Server did not return JSON (is PHP enabled for this URL?)",
          );
        }
        if (!res.ok || !data.ok) {
          throw new Error(data.error || `Request failed (${res.status})`);
        }
        setSending(false);
        setSuccess(true);
        setEmail("");
      } catch (err) {
        setSending(false);
        setError(err.message || "Something went wrong");
      }
    },
    [email, honeypot],
  );

  const onEmailChange = useCallback((event) => {
    setEmail(event.target.value);
    setSuccess(false);
    setError("");
  }, []);

  const onHoneypotChange = useCallback((event) => {
    setHoneypot(event.target.value);
  }, []);

  return {
    slides: VINYL_SLIDES,
    slideIndex,
    slidePrev,
    slideNext,
    setSlideTo,
    email,
    honeypot,
    sending,
    success,
    error,
    handleSubmit,
    onEmailChange,
    onHoneypotChange,
  };
}
