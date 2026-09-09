const milestones = [
  {
    when: 'Nov 2025',
    title: 'It began',
    text:
      'Somewhere between lectures and long days at Panineya, "friend" quietly stopped being the right word. That was the month gudda fell for golu.',
  },
  {
    when: 'Fienfi Café',
    title: 'The first kiss',
    text:
      'A little table at Fienfi Café became the most important seat in the city. One first kiss, and everything after it felt different.',
  },
  {
    when: 'right after',
    title: '"Let\'s not label this"',
    text:
      'Zaara said we shouldn\'t commit — not yet, maybe not ever, let\'s just see. Golu said it to protect us. Gudda said okay, and didn\'t stop showing up.',
  },
  {
    when: 'now',
    title: 'and yet, here we are',
    text:
      'Committed anyway. Two BDS students who see each other every single day and still somehow choose each other, every single day.',
  },
];

export default function OurStory() {
  return (
    <section className="section story">
      <h2 className="section-heading">Our Story</h2>
      <p className="section-sub">
        gudda &amp; golu, told the way it actually happened.
      </p>

      <div className="timeline">
        {milestones.map((m, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-dot" />
            <div className="tl-content">
              <span className="tl-when script">{m.when}</span>
              <h3 className="tl-title">{m.title}</h3>
              <p>{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="nickname-strip">
        <div className="nickname-card">
          <span className="script nickname-word">golu / potota</span>
          <p>what gudda calls you</p>
        </div>
        <span className="nickname-heart">💗</span>
        <div className="nickname-card">
          <span className="script nickname-word">gudda</span>
          <p>what golu calls me</p>
        </div>
      </div>

      <style>{`
        .nickname-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 60px;
          flex-wrap: wrap;
        }
        .nickname-card {
          background: var(--pink-soft);
          border-radius: 20px;
          padding: 18px 28px;
          text-align: center;
        }
        .nickname-word {
          font-size: 1.6rem;
          color: var(--pink-accent);
        }
        .nickname-card p {
          font-size: 0.85rem;
          margin-top: 4px;
        }
        .nickname-heart {
          font-size: 1.5rem;
        }
        .timeline {
          position: relative;
          margin-top: 20px;
          padding-left: 28px;
          border-left: 2px dashed var(--pink-mid);
        }
        .tl-item {
          position: relative;
          margin-bottom: 44px;
        }
        .tl-item:last-child {
          margin-bottom: 0;
        }
        .tl-dot {
          position: absolute;
          left: -35px;
          top: 4px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--pink-accent);
          box-shadow: 0 0 0 4px var(--pink-soft);
        }
        .tl-when {
          font-size: 1.2rem;
          color: var(--pink-accent);
        }
        .tl-title {
          font-size: 1.4rem;
          margin: 4px 0 8px;
        }
      `}</style>
    </section>
  );
}
