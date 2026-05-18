import React from 'react';
import { useHeaderNav } from './useHeaderNav';

export default function Header({
  toggleAboutModal,
  toggleMusicModal,
  toggleVideoModal,
  toggleContactsModal,
}) {
  const { menuOpen, openModal, toggleMenu } = useHeaderNav({
    toggleAboutModal,
    toggleMusicModal,
    toggleVideoModal,
    toggleContactsModal,
  });

  return (
    <div className="wrapper-header">
      <div className="logo" onClick={() => window.location.reload()} role="presentation" />

      <div className={menuOpen ? 'wrap-menu mobile  is-active' : 'wrap-menu mobile'}>
        <div className="menu">
          <div className="menuItem animation" onClick={() => openModal('toggleAboutModal')}>
            about
          </div>
          <div className="menuItem animation" onClick={() => openModal('toggleMusicModal')}>
            music
          </div>
          <div className="menuItem animation" onClick={() => openModal('toggleVideoModal')}>
            video
          </div>
          <div className="menuItem animation" onClick={() => openModal('toggleContactsModal')}>
            contact
          </div>
        </div>
        <div className="social desctop">
          <a href="https://vonavimusic.bandcamp.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-bandcamp" />
          </a>
          <a href="https://instagram.com/vonavimusic/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQgAkHb7N4xkeO9UL6bz45g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://open.spotify.com/artist/3o52Y5URHBBFL6l3pgV5EF?si=Z7hqHSw5Rvi3VSAkvtMzSQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-spotify" />
          </a>
          <a href="https://soundcloud.com/vonavimusic" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-soundcloud" />
          </a>
          <a href="mailto:andrei@vonavimusic.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope" />
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={toggleMenu}
        className={menuOpen ? 'menu-toggle is-active' : 'menu-toggle'}
        aria-expanded={menuOpen}
        aria-label="Menu"
      />
    </div>
  );
}
