const photos = [
  { src: '/photos/solo-zara.jpeg', caption: 'just her', rotate: -4 },
  { src: '/photos/Couple-1.jpeg', caption: 'gudda + golu', rotate: 3 },
  { src: '/photos/Couple-2.jpeg', caption: 'us, at Feronoz', rotate: -2 },
  { src: '/photos/Couple-3.jpeg', caption: 'that day', rotate: 5 },
  { src: '/photos/Couple-4.jpeg', caption: 'favourite one', rotate: -3 },
  { src: '/photos/Couple-5.jpeg', caption: 'always us', rotate: 2 },
];


export default function Gallery() {
  return (
    <section className="section gallery">
      <h2 className="section-heading">In Pictures</h2>
      <p className="section-sub">a little scrapbook of us.</p>

      <div className="gallery-grid">
        {photos.map((p, i) => (
          <div
            className="polaroid"
            key={i}
            style={{ transform: `rotate(${p.rotate}deg)` }}
          >
            <span className="tape" />
            <img src={p.src} alt={p.caption} />
            <span className="polaroid-caption">{p.caption}</span>
          </div>
        ))}
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px 20px;
          margin-top: 20px;
        }
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
