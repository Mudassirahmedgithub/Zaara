export default function Footer() {
  return (
    <section className="footer-section">
      <div className="blob-bg" style={{ width: 300, height: 300, background: '#FFB8D9', bottom: -100, left: '50%', transform: 'translateX(-50%)' }} />

      <p className="footer-line">
        happy birthday, golu. thank you for saying yes to no labels,
        and somehow ending up here anyway.
      </p>
      <p className="footer-sign script">gudda ❤️ golu</p>

      <style>{`
        .footer-section {
          position: relative;
          text-align: center;
          padding: 80px 24px 60px;
          overflow: hidden;
        }
        .footer-line {
          position: relative;
          z-index: 1;
          max-width: 460px;
          margin: 0 auto;
          font-size: 1.05rem;
        }
        .footer-sign {
          position: relative;
          z-index: 1;
          margin-top: 20px;
          font-size: 2rem;
          color: var(--pink-accent);
        }
      `}</style>
    </section>
  );
}
