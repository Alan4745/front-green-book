import { useState } from 'react';
import CardColor from './CardColor';

const CarrouselColor = ({ slides = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    if (!slides.length) return null;

    return (
        <div className="relative w-full px-4">
            {/* Contenedor de tarjetas */}
            <div className="flex justify-center items-center gap-3 mb-8">
                {slides[currentSlide].map((card, index) => (
                    <CardColor
                        key={index}
                        bgColor={card.bgColor}
                        circleColor={card.circleColor}
                        className="flex-shrink-0"
                        >
                        <div className="flex flex-col items-center h-full py-8">
                            {/* Círculo con texto principal */}
                            <div
                            className="flex items-center justify-center h-[20vh] w-[20vh] rounded-full"
                            style={{ backgroundColor: card.circleColor }}
                            >
                            <h2
                                className="text-[5vh] font-bold text-white text-center"
                                style={{ fontFamily: "GothamBold" }}
                            >
                                {card.mainText}
                            </h2>
                            </div>

                            {/* Espaciador dinámico */}
                            <div className="flex-grow flex items-center justify-center mt-4">
                            <p
                                className="text-center text-[2.5vh] uppercase tracking-wide"
                                style={{ fontFamily: "GothamNormal" }}
                            >
                                {card.description.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < card.description.split('\n').length - 1 && <br />}
                                </span>
                                ))}
                            </p>
                            </div>
                        </div>
                    </CardColor>

                ))}
            </div>

            {/* Controles de navegación */}
            <div className="flex justify-center items-center gap-8">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border-[0.2vh] border-white flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
                    disabled={currentSlide === 0}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border-[0.2vh] border-white flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
                    disabled={currentSlide === slides.length - 1}
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