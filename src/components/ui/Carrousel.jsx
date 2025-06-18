import React, { useState, useEffect } from 'react';
import Card from './Card';

const Carrousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        { text: "EL CAFÉ EN GUATEMALA", bgImage: "bg1.svg" },
        { text: "LAS 8 REGIONES DEL CAFÉ", bgImage: "bg2.svg" },
        { text: "SISTEMAS AGROFORESTALES", bgImage: "bg3.svg" },
        { text: "BENE ECOLÓGICO", bgImage: "bg4.svg" },
    ];

    const totalCards = cards.length;
    const visibleCards = 3; // Número de tarjetas visibles a la vez
    const maxIndex = Math.max(0, totalCards - visibleCards);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(interval);
    }, [totalCards]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const getTranslateX = () => {
        return `-${currentIndex * (100 / visibleCards)}%`;
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden">
            <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${getTranslateX()})` }}
            >
            {cards.map((card, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 p-2">
                <Card text={card.text} bgImage={card.bgImage} />
                </div>
            ))}
            </div>
        </div>
        <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
            <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
            />
            </svg>
        </button>
        <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
            <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
            />
            </svg>
        </button>
        <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
            {cards.map((_, index) => (
                <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-green-500" : "bg-gray-300"
                }`}
                ></div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Carrousel;