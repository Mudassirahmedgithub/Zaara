export default function Hero() {
  return (
    <section className="hero fade-up">
      <div className="blob-bg" style={{ width: 340, height: 340, background: '#FFB8D9', top: -80, left: -100 }} />
      <div className="blob-bg" style={{ width: 260, height: 260, background: '#FFE1EE', top: 60, right: -80 }} />

      <p className="hero-badge bob">🎂 happy birthday, golu</p>

      <h1 className="hero-title">
        Zaara <span className="script">Umam</span>
      </h1>

      <p className="hero-date">September 9</p>

      <p className="hero-line">
        my golu, my potota — the girl who somehow also became my whole heart.
        gudda made you a little corner of the internet, just for today.
      </p>

      <div className="hero-scroll-cue">scroll down, potota 💗</div>

      <style>{`
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 24px;
          overflow: hidden;
        }
        .hero-badge {
          font-family: var(--font-script);
          font-size: 1.3rem;
          color: var(--pink-accent);
          background: var(--pink-soft);
          padding: 6px 22px;
          border-radius: 999px;
          margin-bottom: 22px;
          z-index: 1;
        }
        .hero-title {
          font-size: clamp(3rem, 10vw, 5.5rem);
          z-index: 1;
        }
        .hero-title .script {
          color: var(--pink-accent);
        }
        .hero-date {
          font-family: var(--font-script);
          font-size: 1.6rem;
          color: var(--text-soft);
          margin-top: 4px;
          z-index: 1;
        }
        .hero-line {
          max-width: 480px;
          margin-top: 28px;
          font-size: 1.1rem;
          z-index: 1;
        }
        .hero-scroll-cue {
          margin-top: 60px;
          font-family: var(--font-script);
          font-size: 1.1rem;
          color: var(--pink-accent);
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
