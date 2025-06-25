import { useState } from 'react';
import CardColor from './CardColor';

const CarrouselColor = ({ slides = [] }) => {
    const flatSlides = slides.flat();
    const totalCards = flatSlides.length;
    const visibleCount = 4;

    const [startIndex, setStartIndex] = useState(0);

    const getVisibleCards = () => {
        return Array.from({ length: visibleCount }, (_, i) => {
            return flatSlides[(startIndex + i) % totalCards];
        });
    };

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % totalCards);
    };

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    return (
        <div className="relative w-full px-4">
            {/* Contenedor de tarjetas */}
            <div className="flex justify-center items-end gap-3 mb-8">
                {getVisibleCards().map((card, index) => (
                    <CardColor
                        key={`${card.mainText}-${index}`}
                        bgColor={card.bgColor}
                        circleColor={card.circleColor}
                        className={`
                            flex-shrink-0
                            transition-transform duration-300 ease-in-out
                            transform
                            ${index === 0 ? 'scale-120 origin-bottom mr-[3.7vh] z-10' : 'scale-100'}
                        `}
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
                                <p className="text-center text-[2.5vh] uppercase tracking-wide leading-tight">
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
                ))}
            </div>

            {/* Controles */}
            <div className="flex justify-center items-center gap-8">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border-[0.2vh] border-white flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border-[0.2vh] border-white flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
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