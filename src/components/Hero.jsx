import heroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <div
      className="relative h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/20 flex justify-center items-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white text-center">
          Welcome to GRH GLOBAL 
        </h1>
        <h8 className="text-6xl md:text-2xl font-bold text-white text-center "> PVT LTD</h8>
      </div>
    </div>
  );
}

export default Hero;
