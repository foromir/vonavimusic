import React from 'react';
import Header from '../components/Header';
import Preloader from '../components/Preloader';
import MainHero from '../components/MainHero';
import ContactsModal from '../components/ContactsModal';
import AboutModal from '../components/AboutModal';
import MusicModal from '../components/MusicModal';
import VideoModal from '../components/VideoModal';
import WatchModal from '../components/WatchModal';
import VinylModal from '../components/VinylModal';
import { useHomeLayout } from './hooks/useHomeLayout';

export default function Layout() {
  const {
    aboutOpen,
    musicOpen,
    watchOpen,
    contactsOpen,
    videoOpen,
    vinylOpen,
    showAnimation,
    watchEmbedSrc,
    toggleAboutModal,
    toggleMusicModal,
    toggleContactsModal,
    toggleVideoModal,
    toggleVinylModal,
    openWatchModal,
    toggleWatchModal,
    handlePreloaderReveal,
  } = useHomeLayout();

  return (
    <div className="layout">
      <Header
        toggleAboutModal={toggleAboutModal}
        toggleMusicModal={toggleMusicModal}
        toggleVideoModal={toggleVideoModal}
        toggleContactsModal={toggleContactsModal}
      />

      <Preloader onReveal={handlePreloaderReveal} />

      <MainHero showButtons={showAnimation} onBuyVinyl={toggleVinylModal} />

      <ContactsModal open={contactsOpen} onClose={toggleContactsModal} />
      <AboutModal open={aboutOpen} onClose={toggleAboutModal} />
      <MusicModal open={musicOpen} onClose={toggleMusicModal} />
      <VideoModal
        open={videoOpen}
        onClose={toggleVideoModal}
        onPlayVideo={openWatchModal}
      />
      <WatchModal
        open={watchOpen}
        embedSrc={watchEmbedSrc}
        onClose={toggleWatchModal}
      />
      <VinylModal open={vinylOpen} onClose={toggleVinylModal} />
    </div>
  );
}
