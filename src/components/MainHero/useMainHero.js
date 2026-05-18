import { LISTEN_HREF, MAIN_HERO_IMAGE } from '../../data/homeContent';

export function useMainHero() {
  return {
    listenHref: LISTEN_HREF,
    mainImageSrc: MAIN_HERO_IMAGE,
    listenIsLink: Boolean(LISTEN_HREF),
  };
}
