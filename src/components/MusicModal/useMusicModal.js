import { useMemo } from 'react';
import { MUSIC_RELEASES } from '../../data/homeContent';

export function useMusicModal() {
  return useMemo(() => ({ title: 'music', releases: MUSIC_RELEASES }), []);
}
