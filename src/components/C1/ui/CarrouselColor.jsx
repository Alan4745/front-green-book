import { useState } from 'react';
import CardColor from './CardColor';

const CarrouselColor = ({ slides = [] }) => {
    const flatSlides = slides.flat();
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrev = () => setActiveIndex((i) => (i === 0 ? flatSlides.length - 1 : i - 1));
    const goToNext = () => setActiveIndex((i) => (i === flatSlides.length - 1 ? 0 : i + 1));

    const cardContent = (card) => (
        <div className="flex flex-col items-center h-full py-4">
            <div
                className="flex items-center justify-center h-[14vw] w-[14vw] lg:h-[13vh] lg:w-[13vh] rounded-full"
                style={{ backgroundColor: card.circleColor }}
            >
                {card.image ? (
                    <img
                        src={card.image}
                        alt=""
                        className="object-contain"
                        style={{
                            width: card.imageWidth || '10vw',
                            height: card.imageHeight || '10vw'
                        }}
                    />
                ) : (
                    <h2
                        className="text-2xl lg:text-3xl text-white text-center"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {card.mainText}
                    </h2>
                )}
            </div>
            <div className="flex-grow flex items-center justify-center mt-3">
                <p className="text-center text-sm uppercase tracking-wide leading-tight">
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
    );

    return (
        <div className="w-full">
            {/* ===== MOBILE: carrusel con flechas ===== */}
            <div className="lg:hidden flex flex-col items-center gap-5">
                <div className="grid w-full grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-3 px-1">
                    {/* Flecha anterior */}
                    <button
                        type="button"
                        onClick={goToPrev}
                        className="h-10 w-10 rounded-full border-2 border-white text-white grid place-items-center justify-self-start"
                        aria-label="Anterior"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Tarjeta activa */}
                    <div className="justify-self-center w-full transition-transform duration-300 hover:scale-105">
                        <CardColor
                            bgColor={flatSlides[activeIndex].bgColor}
                            circleColor={flatSlides[activeIndex].circleColor}
                            width="w-full"
                            height="h-[36vh]"
                        >
                            {cardContent(flatSlides[activeIndex])}
                        </CardColor>
                    </div>

                    {/* Flecha siguiente */}
                    <button
                        type="button"
                        onClick={goToNext}
                        className="h-10 w-10 rounded-full border-2 border-white text-white grid place-items-center justify-self-end"
                        aria-label="Siguiente"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots de progreso */}
                <div className="flex items-center justify-center gap-2">
                    {flatSlides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/60'}`}
                            aria-label={`Ver tarjeta ${index + 1}`}
                            aria-current={index === activeIndex ? 'true' : 'false'}
                        />
                    ))}
                </div>
            </div>

            {/* ===== DESKTOP: grid 3×2 estático ===== */}
            <div className="hidden lg:block w-full px-6">
                <div className="grid grid-cols-3 gap-x-5 gap-y-5 max-w-[65vw] mx-auto">
                    {flatSlides.map((card, index) => (
                        <div key={index}>
                            <CardColor
                                bgColor={card.bgColor}
                                circleColor={card.circleColor}
                                width="w-full"
                                height="h-[24vw]"
                            >
                                {cardContent(card)}
                            </CardColor>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarrouselColor;
