const videos = [
  { src: '/videos/Video-1.mp4', caption: 'our little dance floor', rotate: -2 },
  { src: '/videos/Video-2.mp4', caption: 'take two', rotate: 2 },
];

export default function Videos() {
  return (
    <section className="section videos">
      <h2 className="section-heading">In Motion</h2>
      <p className="section-sub">
        the two of us, dancing badly and not caring at all.
      </p>

      <div className="video-grid">
        {videos.map((v, i) => (
          <div
            className="polaroid video-polaroid"
            key={i}
            style={{ transform: `rotate(${v.rotate}deg)` }}
          >
            <span className="tape" />
            <video src={v.src} controls playsInline />
            <span className="polaroid-caption">{v.caption}</span>
          </div>
        ))}
      </div>

      <style>{`
        .video-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 36px;
          margin-top: 20px;
        }

        .video-polaroid {
          width: min(90vw, 340px);
        }
      `}</style>
    </section>
  );
}