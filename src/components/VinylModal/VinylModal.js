import React from "react";
import Modal from "../Modal";
import { useVinylModal } from "./useVinylModal";

export default function VinylModal({ open, onClose }) {
  const {
    slides,
    slideIndex,
    slidePrev,
    slideNext,
    setSlideTo,
    email,
    honeypot,
    sending,
    success,
    error,
    handleSubmit,
    onEmailChange,
    onHoneypotChange,
  } = useVinylModal(open);

  if (!open) return null;

  return (
    <Modal toggleModal={onClose} wrapperClassName="modal--bg_white">
      <div className="content vinylModal">
        <div className="wrapOverflowContent vinylModal__scroll">
          <div className="vinylModal__row">
            <div className="vinylModal__col vinylModal__col--slider">
              <div className="vinylModal__slider">
                <button
                  type="button"
                  className="vinylModal__arrow vinylModal__arrow--prev"
                  onClick={slidePrev}
                  aria-label="Previous image">
                  <img
                    className="vinylModal__arrowImg"
                    src="/icons/arrow-left.svg"
                    alt=""
                    aria-hidden="true"
                    width={26}
                    height={44}
                  />
                </button>
                <div className="vinylModal__slideFrame">
                  <img
                    className="vinylModal__slideImg"
                    src={slides[slideIndex]}
                    alt="Past Present Future vinyl"
                  />
                </div>
                <button
                  type="button"
                  className="vinylModal__arrow vinylModal__arrow--next"
                  onClick={slideNext}
                  aria-label="Next image">
                  <img
                    className="vinylModal__arrowImg"
                    src="/icons/arrow-right.svg"
                    alt=""
                    aria-hidden="true"
                    width={26}
                    height={44}
                  />
                </button>
              </div>
              <div
                className="vinylModal__dots"
                role="tablist"
                aria-label="Vinyl photos">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === slideIndex}
                    className={
                      i === slideIndex
                        ? "vinylModal__dot vinylModal__dot--active"
                        : "vinylModal__dot"
                    }
                    onClick={() => setSlideTo(i)}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="vinylModal__col vinylModal__col--copy">
              <h2 className="vinylModal__name">VONAVI</h2>
              <p className="vinylModal__album">Past Present Future</p>
              <div className="vinylModal__meta">
                Release date: April 29, 2026
                <br />
                Format: Limited 100 Vinyl copies, 180g
                <br />
                Price: $39.99 CAD + shipping
              </div>
              <p className="vinylModal__lead">
                Order the vinyl directly from me.
                <br />
                Leave your email and I’ll reach out personally.
              </p>
              <p className="vinylModal__footnote">
                *Includes bonus lossless WAV download
              </p>
              <form className="vinylModal__formWrap" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="vinylModal__honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={onHoneypotChange}
                />
                <div className="vinylModal__formRow">
                  <input
                    id="vinyl-email"
                    className="vinylModal__field"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="email@email.com"
                    value={email}
                    disabled={sending || success}
                    onChange={onEmailChange}
                    aria-label="Email"
                  />
                  <button
                    type="submit"
                    className="vinylModal__orderBtn"
                    disabled={sending || success}>
                    {sending ? "…" : "ORDER VINYL"}
                  </button>
                </div>
                {success ? (
                  <p
                    className="vinylModal__formMsg vinylModal__formMsg--success"
                    role="status"
                    aria-live="polite">
                    Thank you! Your request was sent — I’ll get back to you.
                  </p>
                ) : null}
                {error ? (
                  <p className="vinylModal__formMsg vinylModal__formMsg--error">
                    {error}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
