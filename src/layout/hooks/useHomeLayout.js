import { useState, useEffect, useCallback } from 'react';
import { preloadModalImages } from '../../utils/preloadModalImages';

function setViewportHeightVar() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  const els = document.getElementsByClassName('mainHero');
  Array.prototype.forEach.call(els, el => {
    el.style.setProperty('--vh', `${vh}px`);
  });
}

export function useHomeLayout() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [vinylOpen, setVinylOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [watch, setWatch] = useState({ open: false, embedSrc: null });

  const toggleAboutModal = useCallback(() => {
    setAboutOpen(v => !v);
  }, []);

  const toggleMusicModal = useCallback(() => {
    setMusicOpen(v => !v);
  }, []);

  const toggleContactsModal = useCallback(() => {
    setContactsOpen(v => !v);
  }, []);

  const toggleVideoModal = useCallback(() => {
    setVideoOpen(v => !v);
  }, []);

  const toggleVinylModal = useCallback(() => {
    setVinylOpen(v => !v);
  }, []);

  const openWatchModal = useCallback(embedSrc => {
    setWatch({ open: true, embedSrc });
  }, []);

  const toggleWatchModal = useCallback(() => {
    setWatch(prev => ({
      open: !prev.open,
      embedSrc: prev.open ? null : prev.embedSrc,
    }));
  }, []);

  const handlePreloaderReveal = useCallback(() => {
    setShowAnimation(true);
    preloadModalImages();
  }, []);

  useEffect(() => {
    setViewportHeightVar();
    window.addEventListener('resize', setViewportHeightVar);
    return () => window.removeEventListener('resize', setViewportHeightVar);
  }, []);

  return {
    aboutOpen,
    musicOpen,
    watchOpen: watch.open,
    contactsOpen,
    videoOpen,
    vinylOpen,
    showAnimation,
    watchEmbedSrc: watch.embedSrc,
    toggleAboutModal,
    toggleMusicModal,
    toggleContactsModal,
    toggleVideoModal,
    toggleVinylModal,
    openWatchModal,
    toggleWatchModal,
    handlePreloaderReveal,
  };
}
