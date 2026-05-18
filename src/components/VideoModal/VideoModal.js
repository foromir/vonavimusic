import React from 'react';
import Modal from '../Modal';
import { useVideoModal } from './useVideoModal';

export default function VideoModal({ open, onClose, onPlayVideo }) {
  const { videos, onKeyActivate } = useVideoModal(onPlayVideo);
  if (!open) return null;
  return (
    <Modal toggleModal={onClose}>
      <div className="content">
        <div className="title">video</div>
        <div className="wrapOverflowContent">
          <div className="VideoWrapper">
            {videos.map(({ title, link, image }) => (
              <div
                className="Video"
                key={title}
                style={{ backgroundImage: image }}
                onClick={() => onPlayVideo(link)}
                role="button"
                tabIndex={0}
                onKeyDown={e => onKeyActivate(e, link)}
              >
                <div className="Video__title">{title}</div>
                <div className="Video__playButton" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
