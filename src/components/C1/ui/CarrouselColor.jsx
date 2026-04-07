import { useState, useEffect } from 'react';
import CardColor from './CardColor';

const CarrouselColor = ({ slides = [] }) => {
    const flatSlides = slides.flat();
    const [windowWidth, setWindowWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 1024);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 1024;

    const cardContent = (card) => (
        <div className="flex flex-col items-center h-full py-4">
            <div
                className="flex items-center justify-center h-[13vh] w-[13vh] rounded-full"
                style={{ backgroundColor: card.circleColor }}
            >
                {card.image ? (
                    <img
                        src={card.image}
                        alt="Imagen"
                        className="object-contain"
                        style={{
                            width: card.imageWidth || '10vh',
                            height: card.imageHeight || '10vh'
                        }}
                    />
                ) : (
                    <h2
                        className="text-3xl text-white text-center"
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

    // MOBILE/TABLET: carrusel horizontal deslizable
    if (isMobile) {
        return (
            <div className="w-full">
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-[5vw] pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                    {flatSlides.map((card, index) => (
                        <div key={index} className="flex-shrink-0 w-[70vw] sm:w-[45vw] snap-center">
                            <CardColor
                                bgColor={card.bgColor}
                                circleColor={card.circleColor}
                                width="w-full"
                                height="h-[36vh]"
                            >
                                {cardContent(card)}
                            </CardColor>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // DESKTOP: grid original 3×2
    return (
        <div className="w-full px-6">
            <div className="grid grid-cols-3 gap-x-5 gap-y-5 max-w-[65vw] mx-auto">
                {flatSlides.map((card, index) => (
                    <div key={index}>
                        <CardColor
                            bgColor={card.bgColor}
                            circleColor={card.circleColor}
                            width="w-full"
                            height="h-[36vh]"
                        >
                            {cardContent(card)}
                        </CardColor>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarrouselColor;
