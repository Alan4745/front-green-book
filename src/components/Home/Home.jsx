import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Carrousel from "./ui/Carrousel";
import LanguageSelector from "../Global/LanguageSelector";
import MainMenu from "../Global/MainMenu";
import ColabButton from "./ui/ColabButton";

const backgrounds = [
    "/Img/Start/Fondo1.jpeg",
    "/Img/Start/Fondo2.png",
    "/Img/Start/Fondo3.png",
    "/Img/Start/Fondo4.png",
    ];

    const FADE_DURATION = 2;
    const DISPLAY_TIME = 8;

    const decodeImage = (src) =>
    new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        if (img.decode) {
        img.decode().then(resolve).catch(resolve);
        } else {
        img.onload = resolve;
        img.onerror = resolve;
        }
    });

    const Home = () => {
    const { t, i18n } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const switchKeyRef = useRef(0);
    const indexRef = useRef(0);

    useEffect(() => {
        indexRef.current = currentIndex;
    }, [currentIndex]);

    // Pre-carga de todas las imágenes con skeleton
    useEffect(() => {
        const loadImages = async () => {
        try {
            let loadedCount = 0;
            const totalImages = backgrounds.length;

            // Precargar todas las imágenes una por una
            const loadPromises = backgrounds.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                loadedCount++;
                console.log(`Imagen ${loadedCount}/${totalImages} cargada: ${src}`);
                resolve();
                };
                img.onerror = () => {
                console.error(`Error cargando imagen: ${src}`);
                reject(new Error(`Failed to load ${src}`));
                };
            });
            });

            // Esperar a que TODAS las imágenes estén completamente cargadas
            await Promise.all(loadPromises);

            console.log("Todas las imágenes cargadas exitosamente");

            // Esperar 2 segundos adicionales después de cargar
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Iniciar animación de salida
            setIsExiting(true);

            // Esperar justo lo que dura la animación (0.9s)
            await new Promise((resolve) => setTimeout(resolve, 900));

            setIsLoading(false);
        } catch (error) {
            console.error("Error loading images:", error);
            // Incluso con error, eventualmente quitar el skeleton con animación
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setIsExiting(true);
            await new Promise((resolve) => setTimeout(resolve, 900));
            setIsLoading(false);
        }
        };

        loadImages();
    }, []);

    // Rotación con pre-decode
    useEffect(() => {
        if (isLoading) return;

        let isMounted = true;

        const tick = async () => {
        const current = indexRef.current;
        const next = (current + 1) % backgrounds.length;
        await decodeImage(backgrounds[next]);
        if (!isMounted) return;

        setPrevIndex(current);
        switchKeyRef.current += 1;
        setCurrentIndex(next);
        };

        const id = setInterval(tick, DISPLAY_TIME * 1000);
        return () => {
        isMounted = false;
        clearInterval(id);
        };
    }, [isLoading]);

    const langKey = i18n.resolvedLanguage || i18n.language || "es";

    const homeContent = (
        <div className="relative min-h-screen max-lg:h-[100dvh] max-lg:min-h-0 w-screen overflow-hidden bg-black">
        <div
            className="absolute inset-0"
        >
            {/* Capas de crossfade */}
            <div className="absolute inset-0 z-10" aria-hidden="true">
            {prevIndex !== null && (
                <motion.div
                key={`prev-${switchKeyRef.current}`}
                className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"
                style={{
                    backgroundImage: `url(${backgrounds[prevIndex]})`,
                    willChange: "opacity, transform",
                }}
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                    opacity: 0,
                    scale: 1.0,
                    transition: {
                    duration: FADE_DURATION,
                    ease: [0.22, 1, 0.36, 1],
                    },
                }}
                onAnimationComplete={() => setPrevIndex(null)}
                />
            )}

            <motion.div
                key={`curr-${switchKeyRef.current}`}
                className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"
                style={{
                backgroundImage: `url(${backgrounds[currentIndex]})`,
                willChange: "opacity, transform",
                }}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{
                opacity: 1,
                scale: 1.0,
                transition: {
                    duration: FADE_DURATION,
                    ease: [0.22, 1, 0.36, 1],
                },
                }}
            />
            </div>

            {/* Logo */}
            <div className="relative z-30 flex items-center justify-center h-full">
            <img
                src="/Logos/Greenbook.svg"
                alt={t("app.title")}
                className="absolute top-[19vh] left-[22vh] w-[22%] h-auto max-lg:top-[3vh] max-lg:left-[5vw] max-lg:w-[42%] max-sm:w-[50%]"
            />
            </div>

            {/* Carrusel de capítulos */}
            <div className="absolute bottom-10 transform left-[40%] w-[85%] z-40 max-lg:left-0 max-lg:w-full max-lg:bottom-auto max-lg:top-[40vh] sm:max-lg:top-[48vh] max-sm:top-[34vh]">
            <Carrousel key={`carrousel-${langKey}`} />
            </div>

            {/* Selector de idioma */}
            <div className="absolute bottom-6 left-6 z-50">
            <LanguageSelector />
            </div>

            {/* ColabButton */}
            <div className="absolute bottom-6 left-[350px] z-50 transform -translate-x-1/2 max-lg:hidden">
            <ColabButton key={`colab-${langKey}`} progress={100} />
            </div>

            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-0 z-50 ">
            <MainMenu key={`menu-${langKey}`} />
            </div>
        </div>
        </div>
    );

    // Siempre renderizar ambos: contenido (detrás) + loader (encima con z-9999).
    // El contenido se pinta desde el inicio para que esté listo cuando el loader sale.
    return (
        <>
            {homeContent}

            {/* Loader: siempre en el DOM durante loading, se desvanece con CSS */}
            {isLoading && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
                    style={{
                        pointerEvents: isExiting ? "none" : "auto",
                        animation: isExiting
                            ? "loaderBgExit 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards"
                            : "none",
                    }}
                >
                    <style>{`
                        @keyframes logoPulseHome {
                            0%, 100% { transform: scale(1); opacity: 0.6; }
                            50% { transform: scale(1.18); opacity: 1; }
                        }
                        @keyframes logoExitHome {
                            0% { transform: scale(1); opacity: 1; filter: blur(0px); }
                            100% { transform: scale(3.5); opacity: 0; filter: blur(12px); }
                        }
                        @keyframes loaderBgExit {
                            0% { background-color: rgba(0,0,0,1); }
                            60% { background-color: rgba(0,0,0,0.6); }
                            100% { background-color: transparent; background-image: none; opacity: 0; }
                        }
                    `}</style>
                    <img
                        src="/Logos/Logo.svg"
                        alt="Guatemalan Coffees"
                        style={{
                            width: "180px",
                            maxWidth: "45vw",
                            height: "auto",
                            animation: isExiting
                                ? "logoExitHome 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards"
                                : "logoPulseHome 1.6s ease-in-out infinite",
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default Home;
