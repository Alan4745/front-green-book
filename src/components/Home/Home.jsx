import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Carrousel from "./ui/Carrousel";
import LanguageSelector from "../Global/LanguageSelector";
import MainMenu from "../Global/MainMenu";
import ColabButton from "./ui/ColabButton";
import SmartImage from "../Global/SmartImage";

const backgrounds = [
    "/Img/Start/Fondo1.webp",
    "/Img/Start/Fondo2.webp",
    "/Img/Start/Fondo3.webp",
    "/Img/Start/Fondo4.webp",
];

const FADE_DURATION_MS = 2000;
const DISPLAY_TIME_MS = 8000;

const Home = () => {
    const { t, i18n } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const indexRef = useRef(0);

    useEffect(() => {
        const handleResize = () => {
            setViewport({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        indexRef.current = currentIndex;
    }, [currentIndex]);

    useEffect(() => {
        const tick = () => {
            const current = indexRef.current;
            const next = (current + 1) % backgrounds.length;
            setPrevIndex(current);
            setCurrentIndex(next);
            setTimeout(() => setPrevIndex(null), FADE_DURATION_MS);
        };

        const id = setInterval(tick, DISPLAY_TIME_MS);
        return () => clearInterval(id);
    }, []);

    const langKey = i18n.resolvedLanguage || i18n.language || "es";
    const isCompactLandscape =
        viewport.width <= 980 &&
        viewport.height <= 460 &&
        viewport.width > viewport.height;

    const homeLogoClassName = isCompactLandscape
        ? "absolute top-[4vh] left-[4vw] w-[28%] h-auto"
        : "absolute top-[19vh] left-[22vh] w-[22%] h-auto max-lg:top-[3vh] max-lg:left-[5vw] max-lg:w-[42%] max-sm:w-[50%]";

    const homeCarouselClassName = isCompactLandscape
        ? "absolute right-0 top-[20vh] w-[54%] z-40"
        : "absolute bottom-10 transform left-[40%] w-[85%] z-40 max-lg:left-0 max-lg:w-full max-lg:bottom-auto max-lg:top-[40vh] sm:max-lg:top-[48vh] max-sm:top-[34vh]";

    return (
        <div className="relative min-h-screen max-lg:h-[100dvh] max-lg:min-h-0 w-screen overflow-hidden bg-black">
            <div className="absolute inset-0">
                {/*
                 * 4 imágenes SIEMPRE en el DOM con key estable (nunca se desmontan).
                 * Cambiar key en cada transición forzaba remount → el browser tenía
                 * que reconectar el elemento al cache → congelamiento visible.
                 * Con key estable solo cambia el estilo: CSS transition se encarga
                 * del fade sin ningún parpadeo.
                 */}
                <div className="absolute inset-0 z-10" aria-hidden="true">
                    {backgrounds.map((bg, i) => (
                        <img
                            key={i}
                            src={bg}
                            alt=""
                            aria-hidden="true"
                            loading={i === 0 ? "eager" : "eager"}
                            decoding={i === 0 ? "sync" : "async"}
                            fetchPriority={i === 0 ? "high" : "auto"}
                            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                            style={{
                                /* Visible si es current o prev (durante el fade) */
                                opacity: i === currentIndex || i === prevIndex ? 1 : 0,
                                /* Solo el current hace transición; el prev se queda en 1 sin animar */
                                transition: i === currentIndex
                                    ? `opacity ${FADE_DURATION_MS}ms cubic-bezier(0.22,1,0.36,1)`
                                    : 'none',
                                zIndex: i === currentIndex ? 2 : 1,
                            }}
                        />
                    ))}
                </div>

                {/* Logo */}
                <div className="relative z-30 flex items-center justify-center h-full">
                    {/* Logo principal hero — eager (priority) */}
                    <SmartImage
                        src="/Logos/Greenbook.svg"
                        alt={t("app.title")}
                        className={homeLogoClassName}
                        priority
                    />
                </div>

                {/* Carrusel de capítulos */}
                <div className={homeCarouselClassName}>
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
                <div className="absolute top-[2vh] right-0 z-50">
                    <MainMenu key={`menu-${langKey}`} />
                </div>
            </div>
        </div>
    );
};

export default Home;
