import CardColor from './CardColor';

const CarrouselColor = ({ slides = [] }) => {
    // Aplana el array por si viene anidado
    const flatSlides = slides.flat();

    return (
        <div className="w-full px-6">
            {/* Grid 3 columnas × 2 filas — estático, sin animaciones */}
            <div className="grid grid-cols-3 gap-x-5 gap-y-5 max-w-[65vw] mx-auto">
                {flatSlides.map((card, index) => (
                    <div key={index}>
                        <CardColor
                            bgColor={card.bgColor}
                            circleColor={card.circleColor}
                            width="w-full"
                            height="h-[36vh]"
                        >
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
                        </CardColor>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarrouselColor;