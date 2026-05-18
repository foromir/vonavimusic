import { useState, useCallback } from 'react';

export function useHeaderNav({
  toggleAboutModal,
  toggleMusicModal,
  toggleVideoModal,
  toggleContactsModal,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = useCallback(
    modalName => {
      switch (modalName) {
        case 'toggleAboutModal':
          toggleAboutModal();
          break;
        case 'toggleMusicModal':
          toggleMusicModal();
          break;
        case 'toggleVideoModal':
          toggleVideoModal();
          break;
        case 'toggleContactsModal':
          toggleContactsModal();
          break;
        default:
          break;
      }
      setMenuOpen(false);
    },
    [toggleAboutModal, toggleMusicModal, toggleVideoModal, toggleContactsModal]
  );

  const toggleMenu = useCallback(() => {
    setMenuOpen(v => !v);
  }, []);

  return { menuOpen, openModal, toggleMenu };
}
