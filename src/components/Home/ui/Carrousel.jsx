import React, { useEffect, useState } from "react";
import Card from "./Card";

const cards = [
  { text: "EL CAFÉ EN GUATEMALA", bgImage: "/Img/Start/Caps/bg1.svg" },
  { text: "LAS 8 REGIONES DEL CAFÉ", bgImage: "/Img/Start/Caps/bg2.svg" },
  { text: "SISTEMAS AGROFORESTALES", bgImage: "/Img/Start/Caps/bg3.svg" },
  { text: "BENEFICIOS ECOSISTÉMICOS", bgImage: "/Img/Start/Caps/bg4.svg" },
  { text: "UN ENTORNO DIVERSO POR EXPLORAR", bgImage: "/Img/Start/Caps/bg5.svg" },
  { text: "SUSTENTABILIDAD QUE TRANSFORMA EL FUTURO DEL CAFÉ", bgImage: "/Img/Start/Caps/bg6.svg" },
];

const Carrousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;
  const totalCards = cards.length;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const progress = ((startIndex + 1) / totalCards) * 100;
  const cardWidth = 220;
  const gap = 75; // 8vh approx
  const containerWidth = (cardWidth + gap) * visibleCards - gap;
  const slideOffset = (cardWidth + gap) * startIndex;
  const loopedCards = [...cards, ...cards]; // Para loop infinito

  return (
    <div className="w-full flex flex-col items-start pl-[7vw] overflow-hidden">
      {/* Viewport ajustado dinámicamente */}
      <div className="overflow-hidden" style={{ width: `${containerWidth}px` }}>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${slideOffset}px)`,
            gap: `${gap}px`,
          }}
        >
          {loopedCards.map((card, index) => (
            <div key={index} className="w-[220px] flex-shrink-0">
              <Card text={card.text} bgImage={card.bgImage} />
            </div>
          ))}
        </div>
      </div>

      {/* Navegación inferior */}
      <div className="mt-6" style={{ width: `${containerWidth}px` }}>
        <div className="flex items-center space-x-6">
          {/* Flechas */}
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="border border-white border-opacity-50 rounded-full p-3 bg-transparent hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="border border-white border-opacity-50 rounded-full p-3 bg-transparent hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Barra + número pegados */}
          <div className="flex items-center space-x-4">
            <div className="w-[700px] h-[4px] bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#668B00] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-white font-Gotham font-normal text-[3rem] leading-none">
              {String((startIndex % totalCards) + 1).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;