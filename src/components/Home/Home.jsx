import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Carrousel from "./ui/Carrousel";
import LanguageSelector from "../Global/LanguageSelector";
import MainMenu from "../Global/MainMenu";
import ColabButton from "./ui/ColabButton";

const backgrounds = [
    "/Img/Start/Fondo1.svg",
    "/Img/Start/Fondo2.svg",
    "/Img/Start/Fondo3.svg",
    "/Img/Start/Fondo4.svg",
    ];

    const FADE_DURATION = 2; // seg (ajústalo a tu gusto)
    const DISPLAY_TIME = 8;  // seg visibles antes de cambiar

    // Pre-decoder robusto (evita pops por carga)
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
    const switchKeyRef = useRef(0); // fuerza remount para que initial se aplique siempre
    const indexRef = useRef(0);

    // Mantener ref actualizado
    useEffect(() => {
        indexRef.current = currentIndex;
    }, [currentIndex]);

    // Pre-carga de todas las imágenes al montar (caché)
    useEffect(() => {
        backgrounds.forEach((src) => {
        const img = new Image();
        img.src = src;
        });
    }, []);

    // Rotación con pre-decode antes del cambio (sin entradas bruscas)
    useEffect(() => {
        let isMounted = true;

        const tick = async () => {
        const current = indexRef.current;
        const next = (current + 1) % backgrounds.length;
        // Asegurar que la próxima esté lista antes de animar
        await decodeImage(backgrounds[next]);
        if (!isMounted) return;

        setPrevIndex(current);
        switchKeyRef.current += 1; // cambia key para remount del current layer
        setCurrentIndex(next);
        };

        const id = setInterval(tick, DISPLAY_TIME * 1000);
        return () => {
        isMounted = false;
        clearInterval(id);
        };
    }, []);

    // Idioma actual (para forzar remount en hijos si no usan useTranslation internamente)
    const langKey = i18n.resolvedLanguage || i18n.language || "es";

    return (
        <div className="relative min-h-screen w-screen overflow-hidden bg-black">
            {/* 🎞️ Capas de crossfade (actual arriba, previa abajo) */}
            <div className="absolute inset-0 z-10" aria-hidden="true">
                {/* Capa previa (fade-out) */}
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

                {/* Capa actual (fade-in) */}
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

            {/* Logo centrado */}
            <div className="relative z-30 flex items-center justify-center h-full">
                <img
                src="/Logos/Greenbook.svg"
                alt={t("app.title")} // ← se traduce el alt según idioma
                className="absolute top-[19vh] left-[22vh] w-[22%] h-auto"
                />
            </div>

            {/* Carrusel de capítulos abajo */}
            <div className="absolute bottom-10 transform left-[40%] w-[85%] z-40">
                <Carrousel key={`carrousel-${langKey}`} />
            </div>

            {/* Selector de idioma */}
            <div className="absolute bottom-6 left-6 z-50">
                <LanguageSelector />
            </div>

            {/* ColabButton */}
            <div className="absolute bottom-6 left-[19%] z-50 transform -translate-x-1/2">
                <ColabButton key={`colab-${langKey}`} progress={100} />
            </div>

            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-0 z-50">
                <MainMenu key={`menu-${langKey}`} />
            </div>
        </div>
    );
};

export default Home;