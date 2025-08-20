import { useState, useEffect } from 'react';
import Card from './Card';

const BigSlider = ({ slides = [], onExpandClick = null }) => {
    const totalSlides = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

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
            <div className="flex justify-center items-end mb-4">
                {rearrangedSlides.map((slide, index) => (
                    <Card
                        key={`${slide.title}-${currentIndex}-${index}`}
                        image={slide.image}
                        Number={slide.Number}
                        title={slide.title}
                        description={slide.description}
                        MaxW={slide.MaxW}
                        highlightWords={slide.highlightWords}
                        onExpandClick={index === 0 ? onExpandClick : null} // Solo la primera card (grande) puede expandir
                        className={`flex-shrink-0 transition-all duration-700 ease-out ${
                            index === 0 ? 'transform scale-y-220 scale-x-150' : 'transform scale-y-100 scale-x-100'
                        }`}
                        style={{
                            transitionDelay: `${index * 100}ms`,
                            transformOrigin: 'bottom center',
                            marginRight: index === 0 ? '14vh' : index === 1 ? '4vh' : '0'
                        }}
                    />
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