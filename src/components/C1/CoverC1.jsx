import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../Global/LanguageSelector";
import MainMenu from "../Global/MainMenu";
import HoverButton from "../Global/HoverButton";

const CoverC1 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Mantiene el salto de línea del párrafo sin cambiar tu JSON:
    // Toma el primer coma y parte el texto en dos líneas.
    const desc = t("c1.cover.desc");
    const commaIndex = desc.indexOf(",");
    const descFirst =
        commaIndex !== -1 ? desc.slice(0, commaIndex + 1) : desc;
    const descSecond =
        commaIndex !== -1 ? desc.slice(commaIndex + 1).trim() : "";

    // Navegación a /c2 (Ver mapa)
    const goToMap = () => {
        navigate("/c2/section1");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            goToMap();
        }
    };

    return (
        <div
            className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
            style={{ backgroundImage: "url('/Img/C1/ImgC1.svg')" }}
        >
            {/* Overlay oscuro suave */}
            <div className="absolute inset-0 bg-black/5 z-20" />

            {/* Número de capítulo */}
            <div className="absolute top-[20vh] right-[30vh] z-30">
                <img
                    src="/Img/Global/Numbers/01.svg"
                    alt={t("c1.cover.chapterAlt", { num: 1 })}
                    className="w-[50vh] h-auto"
                />
            </div>

            {/* Título y descripción */}
            <div className="absolute top-[35vh] right-[45vh] z-30 text-white text-left">
                <h2
                    className="text-white text-[8vh] leading-[1] max-w-[30vw] uppercase"
                    style={{ fontFamily: "GothamBold" }}
                >
                    {t("c1.cover.title.top")}
                    <br />
                    {t("c1.cover.title.bottom")}
                </h2>

                <p
                    className="text-[3vh] text-white/90 mt-[5vh] max-w-[60vw] leading-tight"
                    style={{ fontFamily: "GothamNormal" }}
                >
                    {descFirst}
                    {descSecond && (
                        <>
                            <br />
                            {descSecond}
                        </>
                    )}
                </p>

                {/* Subtítulo */}
                <h3
                    className="text-white text-[4vh] uppercase mt-[6vh] tracking-wider"
                    style={{ fontFamily: "GothamBold" }}
                >
                    {t("c1.cover.subtitle")}
                </h3>

                {/* Línea rosada */}
                <div className="w-[7.2vw] h-[1.5vh] bg-[#DA2F7D] mt-[0.5vh]"></div>
            </div>

            {/* Logo inferior izquierdo */}
            <div className="absolute bottom-[5vh] left-[5vh] z-30">
                <img
                    src="/Logos/LogoPequeño.svg"
                    alt={t("app.title")}
                    className="w-[22vh] h-auto"
                />
            </div>

            {/* Selector de idioma */}
            <div className="absolute bottom-[5vh] right-15 z-50">
                <LanguageSelector />
            </div>

            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-10 z-50">
                <MainMenu />
            </div>

            {/* Botón de hover -> redirige a /c2 */}
            <div
                className="absolute top-10 left-10 z-50 cursor-pointer"
                onClick={goToMap}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-label={t("c1.cover.cta")}
            >
                <HoverButton text={t("c1.cover.cta")} />
            </div>
        </div>
    );
};

export default CoverC1;