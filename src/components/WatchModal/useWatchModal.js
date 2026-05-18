import { useMemo } from 'react';

export function useWatchModal(open, embedSrc) {
  return useMemo(
    () => ({
      visible: Boolean(open && embedSrc),
    }),
    [open, embedSrc]
  );
}
