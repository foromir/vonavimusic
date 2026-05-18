import React from 'react';
import Modal from '../Modal';
import { useWatchModal } from './useWatchModal';

export default function WatchModal({ open, embedSrc, onClose }) {
  const { visible } = useWatchModal(open, embedSrc);
  if (!visible) return null;
  return (
    <Modal toggleModal={onClose}>
      <div className="videoWrapper">
        <iframe
          title={embedSrc}
          src={embedSrc}
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </Modal>
  );
}
