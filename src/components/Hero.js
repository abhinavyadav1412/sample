import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted className="hero-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1>Welcome to WEEM</h1>
      </div>
    </div>
  );
}

export default Hero;