import React from 'react';
import { useMainHero } from './useMainHero';

export default function MainHero({ showButtons, onBuyVinyl }) {
  const { listenHref, mainImageSrc, listenIsLink } = useMainHero();

  return (
    <div className="mainHero">
      <img className="mainHero__img" src={mainImageSrc} alt="VONAVI" />
      <div
        className={
          showButtons
            ? 'mainHero__buttons mainHero__buttons--show'
            : 'mainHero__buttons'
        }
      >
        {listenIsLink ? (
          <a
            className="buttonDefault"
            href={listenHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            LISTEN
          </a>
        ) : (
          <span
            className="buttonDefault mainHero__listenPending"
            title="Link will be added when the album is out"
          >
            LISTEN
          </span>
        )}
        <button type="button" className="buttonDefault" onClick={onBuyVinyl}>
          BUY VINYL
        </button>
      </div>
    </div>
  );
}
