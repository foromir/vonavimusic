import React from 'react';
import Modal from '../Modal';
import { useContactsModal } from './useContactsModal';

export default function ContactsModal({ open, onClose }) {
  const { title, body } = useContactsModal();
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
