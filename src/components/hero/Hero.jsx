const Hero = () => {
    return (
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/Img/Fondo1.svg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col z-20">
          <img
            src="/Logos/Greenbook.svg"
            alt="Green Book Logo"
            className="w-100 mt-45 ml-45"
          />
        </div>
      </div>
    );
  };
  
  export default Hero;
  