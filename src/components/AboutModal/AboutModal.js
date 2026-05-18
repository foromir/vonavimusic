import React from 'react';
import Modal from '../Modal';
import { useAboutModal } from './useAboutModal';

export default function AboutModal({ open, onClose }) {
  const { title, body } = useAboutModal();
  if (!open) return null;
  return (
    <Modal toggleModal={onClose}>
      <div className="content">
        <div className="title">{title}</div>
        <div className="wrapOverflowContent">{body}</div>
      </div>
    </Modal>
  );
}
