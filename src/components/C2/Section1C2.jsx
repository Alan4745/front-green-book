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
import RegionReutilizable from "./Region/RegionReutilizable";

const Section1C2 = () => {
    const { t } = useTranslation();
    const [showDiversidad, setShowDiversidad] = useState(false);

    const [regionActiva, setRegionActiva] = useState(null);

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
        //controlando animacion al hacer click en una region
        console.log("Se hizo click en", regionKey)
        setRegionActiva(regionKey);
        

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
        { src: RegionAcatenango, top: "99.0%", left: "35.0%", key: "acatenango", ref: acatenangoRef, width:"mt-[200px]" },
        { src: RegionAntigua, top: "100.5%", left: "60.5%", key: "antigua", ref: antiguaRef },
        { src: RegionSanMarcos, top: "56.0%", left: "-0.0%", key: "sanmarcos" , ref: sanmarcosRef },
        { src: RegionAtitlan, top: "85.5%", left: "3.5%", key: "atitlan", ref: atitlanRef },
        { src: RegionCoban, top: "13.5%", left: "17.0%", key: "coban", ref: cobanRef },
        { src: RegionFraijanes, top: "88.0%", left: "88.0%", key: "fraijanes", ref: fraijanesRef },
        { src: RegionHuehue, top: "30.5%", left: "0.0%", key: "huehue", ref: huehueRef },
        { src: RegionOriente, top: "61.5%", left: "102.0%", key: "oriente", ref: orienteRef },
    ];

    return (
        <div className="w-full bg-[#5FCAD0]">
            {/* Map Section */}
            <div className="relative min-h-screen w-full max-lg:min-h-[75vh] max-lg:py-[8vh]">
                {/* Imagen de fondo centrada */}
                <div className="flex items-center justify-center">
                    <div className="relative mt-[15vh] w-[40vw] max-w-[821px] aspect-[821/683] min-[1024px]:max-[1200px]:w-[58vw] max-lg:w-[85vw] max-lg:mt-[10vh]">
                    <img
                        src={MapaFlechasC2}
                        alt={t("c2.section1.mapAlt")}
                        className="absolute inset-0 w-full h-full"
                    />

                    {/* Regiones clickeables con hover */}
                    {regions.map((region, idx) => (
                        <img
                            key={idx}
                            src={region.src}
                            alt={t(`c2.section1.regions.${region.key}.alt`)}
                            title={t(`c2.section1.regions.${region.key}.alt`)}
                            onClick={() => handleRegionClick(region.key)}
                            className="absolute w-[19%] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110 min-[1024px]:max-[1200px]:w-[16%] max-lg:w-[18%]"
                            style={{
                                top: region.top,
                                left: region.left
                            }}
                        />
                    ))}
                    </div>
                </div>

                {/* Botón de diversidad cafetalera */}
                <div className="absolute top-10 left-10 z-50 max-lg:top-4 max-lg:left-4">
                    <div onClick={() => setShowDiversidad(true)}>
                        <HoverButton
                            text={t("c2.section1.cta")}
                            textOffset={10}
                            hoverOffset={20}
                        />
                    </div>
                </div>

                {/* Modal: muestra DiversidadC en lugar de una imagen */}
                {showDiversidad && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 max-lg:items-start max-lg:pt-[8vh]" onClick={() => setShowDiversidad(false)}>
                        <div onClick={(e) => e.stopPropagation()}  className="relative max-w-[90vw] max-h-[90vh] overflow-auto bg-white max-lg:max-w-[94vw] max-lg:max-h-[84vh]">
                            <CloseButton
                                onClick={() => setShowDiversidad(false)}
                                positionClass="absolute top-[7vh] left-[111vh] z-50 max-lg:hidden"
                            />
                            <div className="max-lg:hidden">
                                <DiversidadC baseWidthVh={130} />
                            </div>
                            <div
                                className="relative hidden max-lg:block overflow-hidden"
                                style={{ width: '46.8vh', height: '60.6vh' }}
                            >
                                <CloseButton
                                    onClick={() => setShowDiversidad(false)}
                                    positionClass="absolute top-[2.5vh] left-[40vh] z-50"
                                />
                                <div style={{ transform: 'scale(0.36)', transformOrigin: 'top left' }}>
                                    <DiversidadC baseWidthVh={130} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Region Components - Each with its ref */}
            {regions.map((region, index) => (
                <div key={index} ref={region.ref} className={region.width}  >
                    <RegionReutilizable 
                        tipo={region.key}  
                        isActive={regionActiva === region.key}
                    />
                </div>
            ))}
        </div>
    );
};

export default Section1C2;
