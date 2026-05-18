import { useMemo, useCallback } from 'react';
import { VIDEOS } from '../../data/homeContent';

export function useVideoModal(onPlayVideo) {
  const videos = useMemo(() => VIDEOS, []);

  const onKeyActivate = useCallback(
    (event, link) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onPlayVideo(link);
      }
    },
    [onPlayVideo]
  );

  return { videos, onKeyActivate };
}
