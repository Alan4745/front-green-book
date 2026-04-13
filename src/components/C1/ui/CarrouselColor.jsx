import { useEffect, useState } from 'react';
import CardColor from './CardColor';

const CarrouselColor = ({ slides = [] }) => {
    const flatSlides = slides.flat();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isShortLandscape, setIsShortLandscape] = useState(false);
    const [isMobilePortrait, setIsMobilePortrait] = useState(false);

    useEffect(() => {
        const updateViewportMode = () => {
            if (typeof window === 'undefined') return;
            const isLandscape = window.innerWidth > window.innerHeight;
            setIsShortLandscape(isLandscape && window.innerHeight <= 450);
            setIsMobilePortrait(!isLandscape && window.innerWidth <= 430 && window.innerHeight >= 700);
        };

        updateViewportMode();
        window.addEventListener('resize', updateViewportMode);
        return () => window.removeEventListener('resize', updateViewportMode);
    }, []);

    const goToPrev = () => setActiveIndex((i) => (i === 0 ? flatSlides.length - 1 : i - 1));
    const goToNext = () => setActiveIndex((i) => (i === flatSlides.length - 1 ? 0 : i + 1));

    const circleSizeClass = isShortLandscape
        ? 'w-[11vh]'
        : isMobilePortrait
        ? 'w-[18vw]'
        : 'w-[14vw] lg:w-[13vh]';

    const getMainTextClass = (card) => isShortLandscape
        ? 'text-[1.35rem]'
        : isMobilePortrait
        ? 'text-[2rem]'
        : 'text-2xl lg:text-3xl';

    const getDescClass = (card) => {
        const isDense = card.description.replace(/\s+/g, ' ').trim().length > 42;
        if (isShortLandscape) {
            return isDense
                ? 'text-[0.8rem] tracking-normal leading-[1.03]'
                : 'text-[0.95rem] tracking-normal leading-[1.08]';
        }
        if (isMobilePortrait) {
            return isDense
                ? 'text-[0.88rem] tracking-normal leading-[1.1]'
                : 'text-[0.95rem] tracking-normal leading-[1.15]';
        }
        return 'text-sm tracking-wide leading-tight';
    };

    const cardContent = (card) => (
        <div className={`flex flex-col items-center h-full ${isShortLandscape ? 'py-2' : isMobilePortrait ? 'py-4.5' : 'py-4'}`}>
            <div
                className={`flex shrink-0 aspect-square items-center justify-center rounded-full ${circleSizeClass}`}
                style={{ backgroundColor: card.circleColor }}
            >
                {card.image ? (
                    <img
                        src={card.image}
                        alt=""
                        className="object-contain"
                        style={{
                            width: isShortLandscape ? '8vh' : isMobilePortrait ? '11vw' : (card.imageWidth || '10vw'),
                            height: isShortLandscape ? '8vh' : isMobilePortrait ? '11vw' : (card.imageHeight || '10vw')
                        }}
                    />
                ) : (
                    <h2
                        className={`text-white text-center ${getMainTextClass(card)}`}
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {card.mainText}
                    </h2>
                )}
            </div>
            <div className={`flex-grow flex items-center justify-center ${isShortLandscape ? 'mt-2 px-3' : isMobilePortrait ? 'mt-3 px-4' : 'mt-3'}`}>
                <p className={`text-center uppercase ${getDescClass(card)}`}>
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
            <div className={`lg:hidden flex flex-col items-center ${isShortLandscape ? 'gap-2' : 'gap-5'}`}>
                <div className={`grid w-full grid-cols-[40px_minmax(0,1fr)_40px] items-center px-1 ${isShortLandscape ? 'max-w-[92vw] gap-2' : 'gap-3'}`}>
                    {/* Flecha anterior */}
                    <button
                        type="button"
                        onClick={goToPrev}
                        className="h-10 w-6 text-white grid place-items-center justify-self-start"
                        aria-label="Anterior"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Tarjeta activa */}
                    <div className={`justify-self-center flex justify-center transition-transform duration-300 hover:scale-105 ${isShortLandscape ? 'w-full' : 'w-full md:w-[50%]'}`}>
                        <CardColor
                            bgColor={flatSlides[activeIndex].bgColor}
                            circleColor={flatSlides[activeIndex].circleColor}
                            width={isShortLandscape ? 'w-[50vh]' : isMobilePortrait ? 'w-[39vh]' : 'w-[36vh]'}
                            height={isShortLandscape ? 'h-[50vh]' : isMobilePortrait ? 'h-[39vh]' : 'h-[36vh]'}
                            className={isShortLandscape ? 'rounded-[1.25rem] px-5 py-2.5' : isMobilePortrait ? 'rounded-[1.5rem] px-5 py-4' : ''}
                        >
                            {cardContent(flatSlides[activeIndex])}
                        </CardColor>
                    </div>

                    {/* Flecha siguiente */}
                    <button
                        type="button"
                        onClick={goToNext}
                        className="h-10 w-6 text-white grid place-items-center justify-self-end"
                        aria-label="Siguiente"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots de progreso */}
                <div className={`flex items-center justify-center ${isShortLandscape ? 'gap-1.5' : 'gap-2'}`}>
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
