import React from 'react';
import { useModalRootClass } from './useModalRootClass';

export default function Modal({ wrapperClassName, toggleModal, children }) {
  const rootClass = useModalRootClass(wrapperClassName);
  return (
    <div className={rootClass}>
      <div className="overlay" onClick={toggleModal} />
      <button type="button" onClick={toggleModal} className="menu-toggle is-active" />
      {children}
    </div>
  );
}
