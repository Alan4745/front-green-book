import { useEffect, useState } from 'react';
import CardColor from './CardColor';
import SmartImage from '../../Global/SmartImage';

const CarrouselColor = ({ slides = [] }) => {
    const flatSlides = slides.flat();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isShortLandscape, setIsShortLandscape] = useState(false);
    const [isMobilePortrait, setIsMobilePortrait] = useState(false);
    const [isCompactDesktopPortrait, setIsCompactDesktopPortrait] = useState(false);
    const [isIpadPortrait1032, setIsIpadPortrait1032] = useState(false);

    useEffect(() => {
        const updateViewportMode = () => {
            if (typeof window === 'undefined') return;
            const isLandscape = window.innerWidth > window.innerHeight;
            setIsShortLandscape(isLandscape && window.innerHeight <= 450);
            setIsMobilePortrait(!isLandscape && window.innerWidth <= 460 && window.innerHeight >= 760);
            setIsCompactDesktopPortrait(
                !isLandscape &&
                window.innerWidth >= 1024
            );
            setIsIpadPortrait1032(
                !isLandscape &&
                window.innerWidth >= 1000 &&
                window.innerWidth <= 1060 &&
                window.innerHeight >= 1280 &&
                window.innerHeight <= 1366
            );
        };

        updateViewportMode();
        window.addEventListener('resize', updateViewportMode);
        return () => window.removeEventListener('resize', updateViewportMode);
    }, []);

    const goToPrev = () => setActiveIndex((i) => (i === 0 ? flatSlides.length - 1 : i - 1));
    const goToNext = () => setActiveIndex((i) => (i === flatSlides.length - 1 ? 0 : i + 1));

    const getCircleSizeClass = (card) => {
        const hasImage = Boolean(card.image);

        if (isShortLandscape) {
            return hasImage ? 'h-[11vh] w-[11vh]' : 'h-[12vh] w-[12vh]';
        }

        if (isMobilePortrait) {
            return hasImage
                ? 'h-[18vw] w-[18vw] max-h-[86px] max-w-[86px]'
                : 'h-[22vw] w-[22vw] max-h-[104px] max-w-[104px]';
        }

        if (isCompactDesktopPortrait) {
            return hasImage
                ? 'h-[6vw] w-[6vw] max-h-[62px] max-w-[62px]'
                : 'h-[7vw] w-[7vw] max-h-[72px] max-w-[72px]';
        }

        return hasImage
            ? 'h-[14vw] w-[14vw] lg:h-[13vh] lg:w-[13vh] lg:max-h-[110px] lg:max-w-[110px]'
            : 'h-[15vw] w-[15vw] lg:h-[14.5vh] lg:w-[14.5vh] lg:max-h-[120px] lg:max-w-[120px]';
    };

    const getMainTextClass = (card) => {
        const isLongValue = (card.mainText || '').length >= 6;

        if (isShortLandscape) {
            return isLongValue
                ? 'px-2 text-[1.1rem] leading-none whitespace-nowrap'
                : 'px-2 text-[1.35rem] leading-none whitespace-nowrap';
        }

        if (isMobilePortrait) {
            return isLongValue
                ? 'px-2 text-[1.35rem] leading-none whitespace-nowrap'
                : 'px-2 text-[1.85rem] leading-none whitespace-nowrap';
        }

        if (isCompactDesktopPortrait) {
            return isLongValue
                ? 'px-1 text-[0.92rem] leading-none whitespace-nowrap'
                : 'px-1 text-[1.2rem] leading-none whitespace-nowrap';
        }

        return isLongValue
            ? 'px-3 text-[1.35rem] lg:text-[1.7rem] portrait:lg:text-[0.92rem] portrait:lg:px-1 leading-none whitespace-nowrap'
            : 'px-3 text-2xl lg:text-3xl portrait:lg:text-[1.2rem] portrait:lg:px-1 leading-none whitespace-nowrap';
    };

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
        if (isCompactDesktopPortrait) {
            return isDense
                ? 'text-[0.72rem] tracking-normal leading-[1.05]'
                : 'text-[0.8rem] tracking-normal leading-[1.1]';
        }
        return isDense
            ? 'text-sm tracking-normal leading-[1.15]'
            : 'text-md tracking-wide leading-tight';
    };

    const cardContent = (card) => (
        <div className={`flex flex-col items-center h-full ${isShortLandscape ? 'py-2' : isMobilePortrait ? 'py-4.5' : isCompactDesktopPortrait ? 'py-1' : 'py-4'}`}>
            <div
                className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full ${getCircleSizeClass(card)}`}
                style={{ backgroundColor: card.circleColor }}
            >
                {card.image ? (
                    /* Imagen ícono tarjeta — lazy */
                    <SmartImage
                        src={card.image}
                        alt=""
                        className={`object-contain ${isCompactDesktopPortrait ? 'max-h-[54%] max-w-[54%]' : isIpadPortrait1032 ? 'max-h-[58%] max-w-[58%]' : 'max-h-[70%] max-w-[70%]'}`}
                        style={{
                            width: isShortLandscape ? '8vh' : isMobilePortrait ? '10.5vw' : isCompactDesktopPortrait ? '3.5vw' : (card.imageWidth || '10vw'),
                            height: isShortLandscape ? '8vh' : isMobilePortrait ? '10.5vw' : isCompactDesktopPortrait ? '3.5vw' : (card.imageHeight || '10vw')
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
            <div className={`flex-grow flex items-center justify-center ${isShortLandscape ? 'mt-2 px-3' : isMobilePortrait ? 'mt-3 px-4' : isCompactDesktopPortrait ? 'mt-0.5 px-3' : 'mt-3'}`}>
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
                <div className={`grid mx-auto ${isCompactDesktopPortrait ? 'grid-cols-2 max-w-[68vw] gap-x-4 gap-y-4' : 'grid-cols-3 max-w-[65vw] gap-x-5 gap-y-5 portrait:lg:grid-cols-2 portrait:lg:max-w-[68vw] portrait:lg:gap-x-4 portrait:lg:gap-y-4'}`}>
                    {flatSlides.map((card, index) => (
                        <div key={index}>
                            <CardColor
                                bgColor={card.bgColor}
                                circleColor={card.circleColor}
                                width="w-full"
                                height={isCompactDesktopPortrait ? 'h-[34vw]' : 'h-[28vw]'}
                                className={isCompactDesktopPortrait ? 'p-4' : 'p-5'}
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
