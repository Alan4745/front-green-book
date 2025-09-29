import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardColor from './CardColor';

const CarrouselColor = ({ slides = [] }) => {
    const flatSlides = useMemo(() => slides.flat(), [slides]);
    const totalCards = flatSlides.length;
    const visibleCount = 4;

    const [startIndex, setStartIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const getVisibleCards = () => {
        if (totalCards === 0) return [];
        return Array.from({ length: visibleCount }, (_, i) => {
            return flatSlides[(startIndex + i) % totalCards];
        });
    };

    const nextSlide = () => {
        if (totalCards === 0) return;
        setStartIndex((prev) => (prev + 1) % totalCards);
    };

    const prevSlide = () => {
        if (totalCards === 0) return;
        setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    // ⏲️ Autoplay cada 2s (pausable con hover)
    useEffect(() => {
        if (totalCards <= 1) return; // nada que rotar
        const id = setInterval(() => {
            if (!isPaused) nextSlide();
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused, totalCards, startIndex]); // reinicia el timer al cambiar índice

    // 🎞️ Variantes de animación para cada card (entrada/salida sutil)
    const itemVariants = {
        initial: { opacity: 0, y: 10, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
        exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.25, ease: 'easeIn' } }
    };

    return (
        <div className="relative w-full px-4">
            {/* Contenedor de tarjetas */}
            <div
                className="flex justify-center items-end gap-3 mb-8"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                aria-live="polite"
            >
                <AnimatePresence initial={false} mode="popLayout">
                    {getVisibleCards().map((card, index) => (
                        <motion.div
                            key={`${card.mainText}-${(startIndex + index) % (totalCards || 1)}`}
                            variants={itemVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`
                                flex-shrink-0
                                transition-transform duration-300 ease-in-out
                                transform
                                ${index === 0 ? 'scale-120 origin-bottom mr-[3.7vh] z-10' : 'scale-100'}
                            `}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <CardColor
                                bgColor={card.bgColor}
                                circleColor={card.circleColor}
                            >
                                <div className="flex flex-col items-center h-full py-8">
                                    <div
                                        className="flex items-center justify-center h-[20vh] w-[20vh] rounded-full"
                                        style={{ backgroundColor: card.circleColor }}
                                    >
                                        {card.image ? (
                                            <img
                                                src={card.image}
                                                alt="Imagen"
                                                className="object-contain"
                                                style={{
                                                    width: card.imageWidth || '18vh',
                                                    height: card.imageHeight || '18vh'
                                                }}
                                            />
                                        ) : (
                                            <h2
                                                className="text-[5vh] text-white text-center"
                                                style={{ fontFamily: 'GothamBold' }}
                                            >
                                                {card.mainText}
                                            </h2>
                                        )}
                                    </div>
                                    <div className="flex-grow flex items-center justify-center mt-4">
                                        <p className="text-center text-[2.3vh] uppercase tracking-wide leading-tight">
                                            {card.description.split('\n').map((line, i) => (
                                                <span key={i}>
                                                    {line.split(/(\d+)/).map((part, j) =>
                                                        /\d+/.test(part) ? (
                                                            <span key={j} style={{ fontFamily: 'GothamBold' }}>{part}</span>
                                                        ) : (
                                                            <span key={j} style={{ fontFamily: 'GothamNormal' }}>{part}</span>
                                                        )
                                                    )}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </CardColor>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Controles */}
            <div className="flex justify-center items-center gap-8">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border-[0.2vh] border-white flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
                    aria-label="Anterior"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border-[0.2vh] border-white flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
                    aria-label="Siguiente"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CarrouselColor;