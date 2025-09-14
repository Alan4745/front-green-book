import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import HoverButton from "../Global/HoverButton";
import CloseButton from "../Global/CloseButton";
import LanguageSelector from "../Global/LanguageSelector";

import MapaFlechasC2 from "../../assets/C2/MapaFlechasC2.svg";
import DCF1 from "../../assets/C2/DCF1.svg";

// Regiones
import RegionCoban from "../../assets/C2/Region/CobanR.svg";
import RegionHuehue from "../../assets/C2/Region/HuehueR.svg";
import RegionSanMarcos from "../../assets/C2/Region/SanMarcosR.svg";
import RegionAtitlan from "../../assets/C2/Region/AtitlanR.svg";
import RegionAcatenango from "../../assets/C2/Region/AcatenangoR.svg";
import RegionAntigua from "../../assets/C2/Region/AntiguaR.svg";
import RegionFraijanes from "../../assets/C2/Region/FraijanesR.svg";
import RegionOriente from "../../assets/C2/Region/OrienteR.svg";

// Diccionario de rutas personalizadas por región
const REGION_PATHS = {
    coban: "/c2/region/Coban",
    huehue: "/c2/region/Huehue",
    sanmarcos: "/c2/region/SanMarcos",
    atitlan: "/c2/region/Atitlan",
    acatenango: "/c2/region/Acate",
    antigua: "/c2/region/Antigua",
    fraijanes: "/c2/region/Fraijanes",
    oriente: "/c2/region/Oriente"
};

const Section1C2 = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleRegionClick = (regionKey) => {
        const path = REGION_PATHS[regionKey];
        if (path) {
            navigate(path);
        } else {
            console.warn(`Ruta no encontrada para la región: ${regionKey}`);
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const regions = [
        { src: RegionCoban, top: "14vh", left: "68vh", key: "coban" },
        { src: RegionHuehue, top: "27vh", left: "54vh", key: "huehue" },
        { src: RegionSanMarcos, top: "48vh", left: "48vh", key: "sanmarcos" },
        { src: RegionAtitlan, top: "68vh", left: "57vh", key: "atitlan" },
        { src: RegionAcatenango, top: "76vh", left: "82vh", key: "acatenango" },
        { src: RegionAntigua, top: "76vh", right: "85vh", key: "antigua" },
        { src: RegionFraijanes, top: "67vh", right: "63vh", key: "fraijanes" },
        { src: RegionOriente, top: "49vh", right: "52vh", key: "oriente" }
    ];

    return (
        <div className="absolute min-h-screen w-full bg-[#5FCAD0] z-10">
            {/* Imagen de fondo centrada */}
            <div className="flex items-center justify-center">
                <img
                    src={MapaFlechasC2}
                    alt={t("c2.section1.mapAlt")}
                    className="w-[40%] h-auto mt-[15vh]"
                />
            </div>

            {/* Regiones clickeables con hover */}
            {regions.map((region, idx) => (
                <img
                    key={idx}
                    src={region.src}
                    alt={t(`c2.section1.regions.${region.key}.alt`)}
                    title={t(`c2.section1.regions.${region.key}.alt`)}
                    onClick={() => handleRegionClick(region.key)}
                    className="absolute w-[15vh] cursor-pointer transition-transform duration-300 hover:scale-120"
                    style={{
                        top: region.top,
                        left: region.left,
                        right: region.right
                    }}
                />
            ))}

            {/* Botón de diversidad cafetalera */}
            <div className="absolute top-10 left-10 z-50">
                <div onClick={() => handleImageClick(DCF1)}>
                    <HoverButton
                        text={t("c2.section1.cta")}
                        textOffset={-10}
                        hoverOffset={120}
                    />
                </div>
            </div>

            {/* Modal funcional */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative max-w-[90vw] max-h-[90vh] overflow-auto">
                        <img
                            src={selectedImage}
                            alt={t("c2.section1.modalAlt")}
                            className="w-[100vh] h-full object-contain"
                        />
                    </div>
                    <div className="absolute top-[4vh] right-[45vh] z-50">
                        <CloseButton onClick={handleCloseModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Section1C2;