import React from 'react';
import { usePreloader } from './usePreloader';

export default function Preloader({ onReveal }) {
  const { showLoader, percent } = usePreloader(onReveal);
  return (
    <div className={showLoader ? 'showLoader' : 'showLoader hide'}>
      <div>
        <div className="icon" />
        <div className="percent">{percent}%</div>
      </div>
    </div>
  );
}
