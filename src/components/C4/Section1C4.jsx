import React, { useState } from "react";

import F1 from "../../assets/C4/F1.svg";
import F2 from "../../assets/C4/F2.svg";
import F3 from "../../assets/C4/F3.svg";
import F4 from "../../assets/C4/F4.svg";
import F5 from "../../assets/C4/F5.svg";
import F6 from "../../assets/C4/F6.svg";
import F7 from "../../assets/C4/F7.svg";

import ExpandButton from "../Global/ExpandButton";
import CloseButton from "../Global/CloseButton";

const Section1C4 = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); // Estado para manejar la apertura del lightbox
  const [currentImage, setCurrentImage] = useState(""); // Imagen actual del lightbox

    // Función para abrir el lightbox
    const openLightbox = (img) => {
        setCurrentImage(img);
        setIsLightboxOpen(true);
    };

    // Función para cerrar el lightbox
    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <section className="relative w-full h-screen bg-[#000000]">
        {/* Contenedor Grid */}
        <div className="grid grid-cols-4 grid-rows-2 h-full">
            {/* Primer cuadro con fondo anaranjado */}
            <div className="relative bg-[#FF5200] h-[50vh] w-full flex items-center justify-center">
                <div className="text-left text-white">
                    <p className="w-[45vh] text-2xl" style={{ fontFamily: "GothamNormal" }}>
                    En Guatemala los sistemas agroforestales son ecosistemas completos que fortalecen el equilibrio del medio ambiente.
                    </p>
                </div>
            </div>

            {/* Imagen 1 */}
            <div className="relative h-[50vh] w-full">
                <img src={F1} alt="Ecosistemas saludables" className="w-full h-full object-cover opacity-65" />

                <div className="absolute top-8 right-4 text-white">
                    <p className="text-2xl uppercase w-[20vh] text-right" style={{ fontFamily: "GothamBold" }}>Conservan el suelo</p>
                    <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div> {/* Moved to the right */}
                </div>

                {/* Botón expandir */}
                <ExpandButton onClick={() => openLightbox(F1)} title="Agrandar" />

            </div>

            {/* Imagen 2 */}
            <div className="relative h-[50vh] w-full">
                <img src={F2} alt="Fijan el carbono y nitrógeno" className="w-full h-full object-cover opacity-65" />

                <div className="absolute top-8 right-4 text-white">
                    <p className="text-2xl uppercase w-[30vh] text-right" style={{ fontFamily: "GothamBold" }}>Fijan el carbono y nitrógeno</p>
                    <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div> {/* Moved to the right */}
                </div>

                {/* Botón expandir */}
                <ExpandButton onClick={() => openLightbox(F2)} title="Agrandar" />

            </div>

            {/* Imagen 3 */}
            <div className="relative h-[50vh] w-full">
                <img src={F3} alt="Regulan los ciclos del agua" className="w-full h-full object-cover opacity-65" />

                <div className="absolute top-8 right-4 text-white">
                    <p className="text-2xl uppercase w-[25vh] text-right" style={{ fontFamily: "GothamBold" }}>Regulan los ciclos del agua</p>
                    <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div> {/* Moved to the right */}
                </div>

                {/* Botón expandir */}
                <ExpandButton onClick={() => openLightbox(F3)} title="Agrandar" />

            </div>

            {/* Imagen 4 */}
            <div className="relative h-[50vh] w-full">
                <img src={F4} alt="Purifican el aire" className="w-full h-full object-cover opacity-55" />

                <div className="absolute top-8 right-4 text-white">
                    <p className="text-2xl uppercase w-[20vh] text-right" style={{ fontFamily: "GothamBold" }}>Purifican el aire</p>
                    <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div> {/* Moved to the right */}
                </div>

                {/* Botón expandir */}
                <ExpandButton onClick={() => openLightbox(F4)} title="Agrandar" />

            </div>

            {/* Imagen 5 */}
            <div className="relative h-[50vh] w-full">
                <img src={F5} alt="Mitigan las sequías e inundaciones" className="w-full h-full object-cover opacity-55" />

                <div className="absolute top-8 right-4 text-white">
                    <p className="text-2xl uppercase w-[40vh] text-right" style={{ fontFamily: "GothamBold" }}>Mitigan las sequías e inundaciones</p>
                    <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div> {/* Moved to the right */}
                </div>

                {/* Botón expandir */}
                <ExpandButton onClick={() => openLightbox(F5)} title="Agrandar" />

            </div>

            {/* Imagen 6 */}
            <div className="relative h-[50vh] w-full">
                <img src={F6} alt="Mantienen la biodiversidad" className="w-full h-full object-cover opacity-65" />

                <div className="absolute top-8 right-4 text-white">
                    <p className="text-2xl uppercase w-[30vh] text-right" style={{ fontFamily: "GothamBold" }}>Mantienen la biodiversidad</p>
                    <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div> {/* Moved to the right */}
                </div>

                {/* Botón expandir */}
                <ExpandButton onClick={() => openLightbox(F6)} title="Agrandar" />

            </div>

            {/* Imagen 7 */}
            <div className="relative h-[50vh] w-full">
                <img src={F7} alt="Recreación y belleza natural" className="w-full h-full object-cover opacity-65" />

                <div className="absolute top-8 right-4 text-white">
                    <p className="text-2xl uppercase w-[40vh] text-right" style={{ fontFamily: "GothamBold" }}>Recreación y belleza natural</p>
                    <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div> {/* Moved to the right */}
                </div>

                {/* Botón expandir */}
                <ExpandButton onClick={() => openLightbox(F7)} title="Agrandar" />

            </div>
        </div>

        {/* Lightbox */}
        {isLightboxOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="relative">

                    {/* Botón de cerrar */}
                    <CloseButton onClick={closeLightbox} className="absolute top-4 right-4 text-white" />

                    {/* Imagen ampliada */}
                    <img
                    src={currentImage}
                    alt="Imagen ampliada"
                    className="h-[90vh] w-auto object-contain"
                    />
                </div>
            </div>
        )}
        </section>
    );
};

export default Section1C4;