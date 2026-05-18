import { useState, useEffect, useRef } from 'react';

export function usePreloader(onReveal) {
  const [showLoader, setShowLoader] = useState(true);
  const [percent, setPercent] = useState(1);
  const onRevealRef = useRef(onReveal);
  onRevealRef.current = onReveal;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercent(prev => {
        if (prev > 98) {
          clearInterval(intervalId);
          setTimeout(() => {
            const cb = onRevealRef.current;
            if (cb) cb();
          }, 1000);
          setShowLoader(false);
          return prev;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(intervalId);
  }, []);

  return { showLoader, percent };
}
