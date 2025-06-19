import React, { useState } from "react";
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

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % totalCards);
    };

    const visibleItems = Array.from({ length: visibleCards }, (_, i) => {
        const index = (startIndex + i) % totalCards;
        return cards[index];
    });

    const progress = ((startIndex + 1) / totalCards) * 100;

    return (
        <div className="w-full flex flex-col items-start pl-[7vw]">
        {/* Tarjetas visibles */}
        <div className="flex gap-[4.5vh] transition-transform duration-500 ease-in-out">
            {visibleItems.map((card, index) => (
            <div key={index} className="w-[220px] flex-shrink-0">
                <Card text={card.text} bgImage={card.bgImage} />
            </div>
            ))}
        </div>

        {/* Navegación inferior */}
        <div className="mt-6 w-full max-w-[880px]">
            <div className="flex justify-between items-center">
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

            {/* Barra + número */}
            <div className="flex-1 flex items-center ml-4">
                <div className="flex-1 h-[4px] bg-white/30 rounded-full overflow-hidden mr-4">
                <div
                    className="h-full bg-[#668B00] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
                </div>
                <div className="text-white font-Gotham font-normal text-[3rem]">
                {String(startIndex + 1).padStart(2, "0")}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Carrousel;