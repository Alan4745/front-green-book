import React, { useState } from "react";
import F1 from "../../assets/C4/img/F1.svg"; // Asegúrate de que la ruta sea correcta
import F2 from "../../assets/C4/img/F2.svg"; // Asegúrate de que la ruta sea correcta
import ExpandButton from "../Global/ExpandButton";
import CloseButton from "../Global/CloseButton";

const Section2C4 = () => {
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
        <section className="relative w-full min-h-screen bg-[#FF5200]">
            <div className="relative w-full text-white">
                {/* Títulos */}
                <div className="absolute top-[30vh] left-[15vh]">
                    <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                        Suelos únicos
                    </h3>
                    <div className="text-[30vh] font-bold opacity-30 mt-[-13vh]" style={{ fontFamily: "GothamBold" }}>
                        01
                    </div>
                </div>

                <div className="absolute top-[30vh] right-[15vh] text-right">
                    <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                        El poder de los <br /> volcanes
                    </h3>
                    <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                        02
                    </div>
                </div>

                {/* Texto descriptivo */}
                <div className="absolute top-[60vh] left-[15vh] w-[40vh]">
                    <p className="text-[2vh] text-justify leading-relaxed" style={{ fontFamily: "GothamNormal" }}>
                        Los suelos volcánicos guatemaltecos, ricos en minerales y nutrientes se energizan gracias a las raíces y las hojas de los árboles de sombra.
                    </p>
                </div>

                <div className="absolute top-[60vh] right-[15vh] text-right w-[40vh]">
                    <p className="text-[2vh] text-justify leading-relaxed" style={{ fontFamily: "GothamNormal" }}>
                        El Anillo de Fuego, la cadena volcánica que atraviesa el país, refuerza la fertilidad de la tierra donde crecen los cafetos.
                    </p>
                </div>

                {/* Imágenes del centro */}
                <div className="flex flex-col justify-center items-center h-full relative">
                    {/* Imagen superior con botón */}
                    <div className="relative group">
                        <img
                            src={F1}
                            className="w-[60vh] h-[50vh] object-cover cursor-pointer group-hover:scale-110 transition-all duration-300 ease-in-out z-10" // Usamos z-10 para asegurar que esté encima
                            alt="Suelos únicos"
                            onClick={() => openLightbox(F1)}
                        />
                        <div>
                            <ExpandButton onClick={() => openLightbox(F1)} title="Agrandar" />
                        </div>
                    </div>

                    {/* Imagen inferior con botón */}
                    <div className="relative group">
                        <img
                            src={F2}
                            className="w-[60vh] h-[50vh] object-cover cursor-pointer group-hover:scale-110 transition-all duration-300 ease-in-out z-0" // Usamos z-0 para mantener la imagen inferior en su lugar
                            alt="Suelos únicos"
                            onClick={() => openLightbox(F2)}
                        />
                        <div>
                            <ExpandButton onClick={() => openLightbox(F2)} title="Agrandar" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative">
                        <CloseButton onClick={closeLightbox} className="absolute top-4 right-4 text-white" />
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

export default Section2C4;