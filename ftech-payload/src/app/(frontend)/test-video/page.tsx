export default function TestVideo() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
      <h1 style={{ color: 'white', position: 'absolute', zIndex: 10 }}>Video Test</h1>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src="/assets/sections/home/videobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
