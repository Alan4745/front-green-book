import { useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import HoverButton from "../Global/HoverButton";
import CloseButton from "../Global/CloseButton";

import MapaFlechasC2 from "../../assets/C2/MapaFlechasC2.svg";
import DiversidadC from "./ui/DiversidadC";

// Regiones
import RegionCoban from "../../assets/C2/Region/CobanR.svg";
import RegionHuehue from "../../assets/C2/Region/HuehueR.svg";
import RegionSanMarcos from "../../assets/C2/Region/SanMarcosR.svg";
import RegionAtitlan from "../../assets/C2/Region/AtitlanR.svg";
import RegionAcatenango from "../../assets/C2/Region/AcatenangoR.svg";
import RegionAntigua from "../../assets/C2/Region/AntiguaR.svg";
import RegionFraijanes from "../../assets/C2/Region/FraijanesR.svg";
import RegionOriente from "../../assets/C2/Region/OrienteR.svg";
import Acate from "./Region/Acate";
import Antigua from "./Region/Antigua";
import Atitlan from "./Region/Atitlan";
import Coban from "./Region/Coban";
import Fraijanes from "./Region/Fraijanes";
import Huehue from "./Region/Huehue";
import SanMarcos from "./Region/SanMarcos";
import Oriente from "./Region/Oriente";

const Section1C2 = () => {
    const { t } = useTranslation();
    const [showDiversidad, setShowDiversidad] = useState(false);

    // Create refs for each region component
    const cobanRef = useRef(null);
    const huehueRef = useRef(null);
    const sanmarcosRef = useRef(null);
    const atitlanRef = useRef(null);
    const acatenangoRef = useRef(null);
    const antiguaRef = useRef(null);
    const fraijanesRef = useRef(null);
    const orienteRef = useRef(null);

    // Map region keys to their refs
    const REGION_REFS = {
        coban: cobanRef,
        huehue: huehueRef,
        sanmarcos: sanmarcosRef,
        atitlan: atitlanRef,
        acatenango: acatenangoRef,
        antigua: antiguaRef,
        fraijanes: fraijanesRef,
        oriente: orienteRef
    };

    const handleRegionClick = (regionKey) => {
        const ref = REGION_REFS[regionKey];
        if (ref && ref.current) {
            ref.current.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        } else {
            console.warn(`Ref no encontrado para la región: ${regionKey}`);
        }
    };

    const regions = [
        { src: RegionCoban, top: "14vh", left: "66vh", key: "coban" },
        { src: RegionHuehue, top: "27vh", left: "50vh", key: "huehue" },
        { src: RegionSanMarcos, top: "48vh", left: "48vh", key: "sanmarcos" },
        { src: RegionAtitlan, top: "68vh", left: "57vh", key: "atitlan" },
        { src: RegionAcatenango, top: "76vh", left: "78vh", key: "acatenango" },
        { src: RegionAntigua, top: "75vh", right: "83vh", key: "antigua" },
        { src: RegionFraijanes, top: "68vh", right: "62vh", key: "fraijanes" },
        { src: RegionOriente, top: "47vh", right: "48vh", key: "oriente" }
    ];

    return (
        <div className="w-full bg-[#5FCAD0]">
            {/* Map Section */}
            <div className="relative min-h-screen w-full">
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
                    <div onClick={() => setShowDiversidad(true)}>
                        <HoverButton
                            text={t("c2.section1.cta")}
                            textOffset={-10}
                            hoverOffset={120}
                        />
                    </div>
                </div>

                {/* Modal: muestra DiversidadC en lugar de una imagen */}
                {showDiversidad && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                        <CloseButton onClick={() => setShowDiversidad(false)} />
                        <div className="relative max-w-[90vw] max-h-[90vh] overflow-auto bg-white">
                            <DiversidadC baseWidthVh={130} />
                        </div>
                    </div>
                )}
            </div>

            {/* Region Components - Each with its ref */}
            <div ref={acatenangoRef} className="mt-[200px]">
                <Acate />
            </div>

            <div ref={antiguaRef}>
                <Antigua />
            </div>

            <div ref={atitlanRef}>
                <Atitlan />
            </div>

            <div ref={cobanRef}>
                <Coban />
            </div>

            <div ref={fraijanesRef}>
                <Fraijanes />
            </div>

            <div ref={huehueRef}>
                <Huehue />
            </div>

            <div ref={orienteRef}>
                <Oriente />
            </div>

            <div ref={sanmarcosRef}>
                <SanMarcos />
            </div>
        </div>
    );
};

export default Section1C2;