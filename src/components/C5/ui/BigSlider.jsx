import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const BigSlider = ({ slides = [], onExpandClick = null }) => {
    const totalSlides = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    // Estado para el tamaño de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Actualizar el tamaño de la ventana al cambiar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isMobile = windowWidth < 1024;

    // Ajuste dinámico del tamaño de la tarjeta
    const cardScale = isMobile ? 1 : windowWidth > 1600 ? 1 : 0.8;

    // Ajuste dinámico del gap entre las tarjetas
    const gapSize = windowWidth > 1600 ? "gap-[0rem]" : "gap-[0rem]";

    // Ajuste dinámico del margen inferior
    const marginBottom = windowWidth > 1600 ? "mb-4" : "-mb-4";

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isChanging) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
            }
        }, 6000); // Cambiar de tarjeta cada 6 segundos

        return () => clearInterval(interval);
    }, [totalSlides, isChanging]);

    // Rearranging the slides based on currentIndex
    const rearrangedSlides = [
        slides[(currentIndex + 0) % totalSlides],
        slides[(currentIndex + 1) % totalSlides],
        slides[(currentIndex + 2) % totalSlides],
    ];

    // Función para manejar navegación manual
    const goToPrev = () => {
        if (!isChanging) {
            setIsChanging(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
            setTimeout(() => setIsChanging(false), 700); // Duración de la transición
        }
    };

    const goToNext = () => {
        if (!isChanging) {
            setIsChanging(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
            setTimeout(() => setIsChanging(false), 700); // Duración de la transición
        }
    };

    return (
        <div className="relative">
            {/* Contenedor de tarjetas */}
            <div className={`flex justify-center items-end relative ${gapSize} ${marginBottom}`}>

                {/* ===== MOBILE: single card ===== */}
                {isMobile && (
                    <motion.div
                        key={`${rearrangedSlides[0].title}-${currentIndex}-mobile`}
                        className="relative"
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Card
                            image={rearrangedSlides[0].image}
                            Number={rearrangedSlides[0].Number}
                            title={rearrangedSlides[0].title}
                            description={rearrangedSlides[0].description}
                            MaxW={rearrangedSlides[0].MaxW}
                            highlightWords={rearrangedSlides[0].highlightWords}
                            width="w-[85vw]"
                            height="h-[55vw]"
                            forceExpand={true}
                            onExpandClick={onExpandClick}
                            className="flex-shrink-0 transform scale-y-100 scale-x-100"
                            style={{ transformOrigin: 'bottom center' }}
                        />
                    </motion.div>
                )}

                {/* ===== DESKTOP: 3 cards (blindado) ===== */}
                {!isMobile && rearrangedSlides.map((slide, index) => (
                    <motion.div
                        key={`${slide.title}-${currentIndex}-${index}`}
                        className="relative"
                        layout
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: cardScale }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{
                            layout: { type: 'spring', stiffness: 260, damping: 28 },
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <Card
                            image={slide.image}
                            Number={slide.Number}
                            title={slide.title}
                            description={slide.description}
                            MaxW={slide.MaxW}
                            highlightWords={slide.highlightWords}
                            onExpandClick={index === 0 ? onExpandClick : null}
                            className={`flex-shrink-0 transition-all duration-700 ease-out ${
                                index === 0 ? 'transform scale-y-220 scale-x-150' : 'transform scale-y-100 scale-x-100'
                            }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                transformOrigin: 'bottom center',
                                marginRight: index === 0 ? '14vh' : index === 1 ? '4vh' : '0'
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Controles */}
            <div className="flex justify-center items-center gap-8">
                <button 
                    onClick={goToPrev}
                    className="w-12 h-12 rounded-full border-[0.2vh] border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300 disabled:opacity-50"
                    disabled={isChanging}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button 
                    onClick={goToNext}
                    className="w-12 h-12 rounded-full border-[0.2vh] border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300 disabled:opacity-50"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BigSlider;