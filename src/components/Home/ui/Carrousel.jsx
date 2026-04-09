import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "./Card";

const Carrousel = () => {
    const { t, i18n } = useTranslation();

    // 1) Traemos las tarjetas desde i18n (y ponemos un fallback por si falta el JSON)
    const cards = useMemo(() => {
        const arr = t("carrousel.cards", { returnObjects: true });
        if (!Array.isArray(arr) || arr.length === 0) {
        // Fallback si aún no tienes las llaves en el JSON
        return [
            { text: "EL CAFÉ EN GUATEMALA", bgImage: "/Img/Start/Caps/bg1.svg", chapter: "c1" },
            { text: "LAS 8 REGIONES DEL CAFÉ", bgImage: "/Img/Start/Caps/bg2.png", chapter: "c2" },
            { text: "SISTEMAS AGROFORESTALES", bgImage: "/Img/Start/Caps/bg3.png", chapter: "c3" },
            { text: "BENEFICIOS ECOSISTÉMICOS", bgImage: "/Img/Start/Caps/bg4.png", chapter: "c4" },
            { text: "UN ENTORNO DIVERSO POR EXPLORAR", bgImage: "/Img/Start/Caps/bg5.png", chapter: "c5" },
            { text: "SUSTENTABILIDAD QUE TRANSFORMA EL FUTURO DEL CAFÉ", bgImage: "/Img/Start/Caps/bg6.png", chapter: "c6" },
        ];
        }
        return arr;
    }, [t, i18n.resolvedLanguage]);

    const [startIndex, setStartIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Desktop (>=1024): valores originales exactos | Tablet (640-1023) | Móvil (<640)
    const isDesktop = windowWidth >= 1024;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;

    const visibleCards = isDesktop ? 4 : isTablet ? 2.5 : 2;
    const mobileCardWidth = Math.floor((windowWidth - 32) * 0.65);
    const tabletCardWidth = Math.floor((windowWidth * 0.85) / 2.5);
    const cardWidth = isDesktop ? 220 : isTablet ? tabletCardWidth : mobileCardWidth;
    const gap = isDesktop ? 75 : isTablet ? 20 : 12;
    const totalCards = cards.length;

    // 2) Siguiente / Anterior
    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % totalCards);
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    // 3) Auto-slide cada 8s (se reconfigura si cambia el total de tarjetas o el idioma)
    useEffect(() => {
        const interval = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % totalCards);
        }, 8000);
        return () => clearInterval(interval);
    }, [totalCards, i18n.resolvedLanguage]);

    // 4) Cálculos de UI
    const progress = ((startIndex + 1) / totalCards) * 100;
    const containerWidth = (cardWidth + gap) * visibleCards - gap;
    const slideOffset = (cardWidth + gap) * startIndex;
    const loopedCards = [...cards, ...cards]; // loop infinito

    return (
        <div className="w-full flex flex-col items-start pl-[7vw] max-lg:pl-[4vw] overflow-hidden">
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
                <div key={`${card.chapter}-${index}`} style={{ width: `${cardWidth}px` }} className="flex-shrink-0">
                    <Card text={card.text} bgImage={card.bgImage} chapter={card.chapter} />
                </div>
            ))}
            </div>
        </div>

        {/* Navegación inferior */}
        <div className="mt-6 max-lg:mt-3" style={{ width: `${containerWidth}px` }}>
            <div className="flex items-center space-x-6 max-lg:space-x-3">
            {/* Flechas */}
            <div className="flex space-x-4 max-lg:space-x-2">
                <button
                onClick={handlePrev}
                className="border border-white border-opacity-50 rounded-full p-3 max-lg:p-2 bg-transparent hover:scale-110 transition"
                aria-label={t("carrousel.prev", "Anterior")}
                >
                <svg className="w-5 h-5 max-lg:w-4 max-lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                </button>

                <button
                onClick={handleNext}
                className="border border-white border-opacity-50 rounded-full p-3 max-lg:p-2 bg-transparent hover:scale-110 transition"
                aria-label={t("carrousel.next", "Siguiente")}
                >
                <svg className="w-5 h-5 max-lg:w-4 max-lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>

            {/* Barra + número pegados */}
            <div className="flex items-center w-full">
                {/* Barra de progreso */}
                <div className="w-full max-w-[80vh] h-[4px] bg-white/30 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#668B00] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Número con ajuste responsivo */}
                <div
                    className="text-white leading-none ml-4 flex justify-center items-center"
                    style={{ fontFamily: "GothamBold", fontSize: "clamp(1.5rem, 2vw, 3rem)" }}
                >
                    {String((startIndex % totalCards) + 1).padStart(2, "0")}
                </div>
            </div>

            </div>
        </div>
        </div>
    );
};

export default Carrousel;
