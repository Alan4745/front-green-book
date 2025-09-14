import { useTranslation } from "react-i18next";
import BackButton from "../Global/BackButton";
import LanguageSelector from "../Global/LanguageSelector";
import AltitudSteps from "./ui/AltitudSteps";

import FS4 from "../../assets/C1/FS4.svg";
import IconoMontaña from "../../assets/C1/IconoMontaña.svg";

const Section4C1 = () => {
    const { t } = useTranslation();

    return (
        <div
            className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover z-10"
            style={{ backgroundImage: `url(${FS4})` }}
        >
            {/* CUADRO ROSADO EN LA ESQUINA INFERIOR IZQUIERDA */}
            <div className="absolute bottom-0 left-0 bg-[#DA2F7D] w-[80vh] h-[60vh] px-10 flex flex-col justify-between py-10">
                <div className="pt-2">
                    <img
                        src={IconoMontaña}
                        alt={t("c1.section4.iconAlt")}
                        className="w-[8vh] h-[8vh]"
                    />
                </div>
                <div className="pb-2">
                    <h3
                        className="text-white text-[5vh] uppercase leading-snug"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c1.section4.pink.title.top")}<br />{t("c1.section4.pink.title.bottom")}
                    </h3>
                </div>
            </div>

            {/* CUADRO BLANCO DE "REPRODUCE EL VIDEO" */}
            <div className="absolute top-[40vh] left-[70vh] bg-white w-[22vh] h-[22vh] flex shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full p-4">
                    <p
                        className="text-black text-[2vh] text-left uppercase"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t("c1.section4.playBox.title.top")}<br />{t("c1.section4.playBox.title.bottom")}
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                        alt={t("c1.section4.playBox.playAlt")}
                        className="absolute bottom-4 right-4 w-[3.5vh] h-[3.5vh]"
                    />
                </div>
            </div>

            {/* BOTÓN DE REGRESO */}
            <div className="absolute top-10 left-10 z-20">
                <BackButton onClick={() => window.history.back()} />
            </div>

            {/* SECCIÓN DE ALTITUD */}
            <AltitudSteps />

            {/* Botón cambio de idioma */}
            <div className="absolute bottom-10 right-10 z-20">
                <LanguageSelector />
            </div>
        </div>
    );
};

export default Section4C1;