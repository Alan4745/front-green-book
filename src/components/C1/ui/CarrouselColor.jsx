import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardColor from './CardColor';

const CarrouselColor = ({ slides = [] }) => {
    // `flatSlides`: Aplana las tarjetas de la prop `slides` para que sea un arreglo plano.
    const flatSlides = useMemo(() => slides.flat(), [slides]);

    const totalCards = flatSlides.length; // Número total de tarjetas
    const visibleCount = 4; // Número de tarjetas visibles al mismo tiempo

    const [startIndex, setStartIndex] = useState(0); // Índice de la tarjeta actual
    const [isPaused, setIsPaused] = useState(false); // Pausa el carrusel al pasar el ratón

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

    // Ajuste dinámico del margen superior (mt)
    const marginTop = windowWidth > 1600 ? 'mt-12' : '-mt-16'; // 12 si es mayor a 1600px, 6 si no

    // Ajuste dinámico del gap-y (espaciado vertical entre las tarjetas)
    const gapYSize = windowWidth > 1600 ? 'gap-y-12' : 'gap-y-2'; // Ajuste dinámico, 12 si es mayor a 1600px, 8 si no

    // Ajuste dinámico del gap-x (espaciado horizontal entre las tarjetas)
    const gapXSize = windowWidth > 1600 ? 'gap-x-4' : '-gap-x-[2vh]'; // Ajuste dinámico, 4 si es mayor a 1600px, 2 si no

    // `getVisibleCards`: Función que obtiene las tarjetas visibles (en este caso, 4)
    const getVisibleCards = () => {
        if (totalCards === 0) return [];
        return Array.from({ length: visibleCount }, (_, i) => {
            return flatSlides[(startIndex + i) % totalCards];
        });
    };

    // Avanza al siguiente slide
    const nextSlide = () => {
        if (totalCards === 0) return;
        setStartIndex((prev) => (prev + 1) % totalCards); // Cicla a través de las tarjetas
    };

    // Retrocede al slide anterior
    const prevSlide = () => {
        if (totalCards === 0) return;
        setStartIndex((prev) => (prev - 1 + totalCards) % totalCards); // Cicla hacia atrás
    };

    // Autoplay: Si hay más de 1 tarjeta, avanza automáticamente cada 3 segundos, pero se pausa al pasar el ratón.
    useEffect(() => {
        if (totalCards <= 1) return;
        const id = setInterval(() => {
            if (!isPaused) nextSlide();
        }, 3000);
        return () => clearInterval(id); // Limpia el intervalo al salir
    }, [isPaused, totalCards, startIndex]);

    // Variantes de animación para cada tarjeta
    const itemVariants = {
        initial: { opacity: 0, y: 10, scale: 0.9 },  // Un poco más pequeño (90%) al principio
        animate: {
            opacity: 1,
            y: 0,
            scale: window.innerWidth > 1600 ? 1 : 0.8,  // Escala dinámicamente (100% si pantalla grande, 90% si pequeña)
            transition: { duration: 0.35, ease: 'easeOut' }
        },
        exit: {
            opacity: 0,
            y: -8,
            scale: 0.9,  // 90% del tamaño original al salir
            transition: { duration: 0.25, ease: 'easeIn' }
        }
    };

    return (
        <div className={`relative w-full px-4 ${marginTop}`}>
            {/* Contenedor de tarjetas */}
            <div
                className={`flex justify-center items-end ${gapXSize} ${gapYSize} mb-8`}
                onMouseEnter={() => setIsPaused(true)} // Pausa cuando el ratón pasa sobre el carrusel
                onMouseLeave={() => setIsPaused(false)} // Reanuda cuando el ratón sale del carrusel
                aria-live="polite"
            >
                {/* Animación de la entrada y salida de las tarjetas */}
                <AnimatePresence initial={false} mode="popLayout">
                    {getVisibleCards().map((card, index) => (
                        <motion.div
                            key={`${card.mainText}-${(startIndex + index) % (totalCards || 1)}`} // Key única por cada tarjeta
                            variants={itemVariants} // Aplica las animaciones definidas
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`
                                flex-shrink-0
                                transition-transform duration-300 ease-in-out
                                transform
                                ${index === 0 ? 'scale-[120%] origin-bottom mr-[3.7vh] z-10' : 'scale-[100%]'}
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
                                        {/* Si hay imagen, se muestra, si no, se muestra el texto */}
                                        {card.image ? (
                                            <img
                                                src={card.image}
                                                alt="Imagen"
                                                className="object-contain"
                                                style={{
                                                    width: card.imageWidth || '18vw', // Ancho de la imagen
                                                    height: card.imageHeight || '18vw' // Altura de la imagen
                                                }}
                                            />
                                        ) : (
                                            <h2
                                                className="text-4xl text-white text-center"
                                                style={{ fontFamily: 'GothamBold' }}
                                            >
                                                {card.mainText}
                                            </h2>
                                        )}
                                    </div>
                                    <div className="flex-grow flex items-center justify-center mt-4">
                                        {/* Descripción */}
                                        <p className="text-center text-xl uppercase tracking-wide leading-tight">
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

            {/* Controles de navegación */}
            <div className="flex justify-center items-center gap-8">
                {/* Botón de anterior */}
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border-[0.2vh] border-white flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
                    aria-label="Anterior"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Botón de siguiente */}
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