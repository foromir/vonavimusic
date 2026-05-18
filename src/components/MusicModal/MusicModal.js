import React from "react";
import Modal from "../Modal";
import { useMusicModal } from "./useMusicModal";

export default function MusicModal({ open, onClose }) {
  const { title, releases } = useMusicModal();
  if (!open) return null;
  return (
    <Modal toggleModal={onClose} wrapperClassName="modal--bg_white">
      <div className="content">
        <div className="title">{title}</div>
        <div className="wrapOverflowContent">
          <div className="MusicWrapper">
            {releases.map(({ title: albumTitle, subTitle, link, image }) => (
              <div className="Music" key={albumTitle}>
                <div className="Music__title">{albumTitle}</div>
                <div className="Music__subTitle">{subTitle}</div>
                <img className="Music__img" src={image} alt={albumTitle} />
                <a
                  className="Music__link"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer">
                  Listen
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
