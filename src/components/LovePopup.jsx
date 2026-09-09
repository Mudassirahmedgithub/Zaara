import { useState, useRef, useCallback } from 'react';

export default function LovePopup({ onConfirmed }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [confirmed, setConfirmed] = useState(false);
  const [closing, setClosing] = useState(false);
  const cardRef = useRef(null);
  const noRef = useRef(null);

  // Move the "No" button to a random spot inside the card whenever the
  // cursor gets close to it.
  const dodge = useCallback(() => {
    const card = cardRef.current;
    const btn = noRef.current;
    if (!card || !btn) return;

    const cardBox = card.getBoundingClientRect();
    const btnBox = btn.getBoundingClientRect();

    const maxX = cardBox.width - btnBox.width - 24;
    const maxY = cardBox.height - btnBox.height - 24;

    const nextX = Math.max(12, Math.random() * maxX);
    const nextY = Math.max(12, Math.random() * maxY);

    setNoPos({ x: nextX, y: nextY });
  }, []);

  const handleYes = () => {
    setConfirmed(true);
    // let the heart burst play, then reveal the site
    setTimeout(() => setClosing(true), 1800);
    setTimeout(() => onConfirmed(), 2300);
  };

  return (
    <div className={`lp-overlay ${closing ? 'lp-closing' : ''}`}>
      <div className="lp-card" ref={cardRef}>
        {!confirmed ? (
          <>
            <p className="lp-eyebrow">psst, golu... one question</p>
            <h2 className="lp-question">
              Do you love me? <span className="script">🥺💗</span>
            </h2>

            <div className="lp-buttons">
              <button className="btn btn-primary" onClick={handleYes}>
                Yes, always
              </button>
              <button
                ref={noRef}
                className="btn lp-no"
                onMouseEnter={dodge}
                onTouchStart={dodge}
                style={
                  noPos.x || noPos.y
                    ? {
                        position: 'absolute',
                        left: noPos.x,
                        top: noPos.y,
                        margin: 0,
                      }
                    : undefined
                }
              >
                No
              </button>
            </div>
          </>
        ) : (
          <div className="lp-burst-wrap">
            <span className="lp-kiss">😘</span>
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="lp-heart-burst"
                style={{
                  left: `${50 + (Math.random() * 70 - 35)}%`,
                  top: `${50 + (Math.random() * 30 - 15)}%`,
                  animationDelay: `${i * 0.05}s`,
                  fontSize: `${1 + Math.random() * 1.4}rem`,
                }}
              >
                {i % 2 === 0 ? '💕' : '💖'}
              </span>
            ))}
            <p className="lp-caption">knew it, potota 💗</p>
          </div>
        )}
      </div>

      <style>{`
        .lp-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 30%, #FFE9F2 0%, #FFD3E6 100%);
          transition: opacity 0.5s ease;
        }
        .lp-closing {
          opacity: 0;
          pointer-events: none;
        }
        .lp-card {
          position: relative;
          width: min(90vw, 420px);
          min-height: 280px;
          background: #FFFEFF;
          border-radius: 28px;
          box-shadow: 0 24px 60px rgba(91, 42, 65, 0.25);
          padding: 40px 28px;
          text-align: center;
          overflow: hidden;
        }
        .lp-eyebrow {
          font-family: var(--font-script);
          font-size: 1.1rem;
          color: var(--pink-accent);
          margin-bottom: 6px;
        }
        .lp-question {
          font-size: 1.7rem;
          margin-bottom: 36px;
          line-height: 1.3;
        }
        .lp-buttons {
          position: relative;
          display: flex;
          justify-content: center;
          gap: 16px;
          height: 60px;
        }
        .lp-no {
          background: var(--pink-soft);
          color: var(--text-soft);
          transition: left 0.25s ease, top 0.25s ease;
        }
        .lp-burst-wrap {
          position: relative;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .lp-kiss {
          font-size: 3.5rem;
          animation: kissPop 0.6s ease;
        }
        .lp-caption {
          margin-top: 18px;
          font-family: var(--font-script);
          font-size: 1.4rem;
          color: var(--pink-accent);
        }
        .lp-heart-burst {
          position: absolute;
          animation: heartFly 1.1s ease forwards;
          opacity: 0;
        }
        @keyframes kissPop {
          0% { transform: scale(0.4); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes heartFly {
          0% { opacity: 0; transform: translateY(0) scale(0.6); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-90px) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lp-kiss, .lp-heart-burst { animation: none; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
