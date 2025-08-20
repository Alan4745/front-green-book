import React, { useState } from 'react';
import F1 from '../../assets/C5/S3/F1.svg';
import F2 from '../../assets/C5/S3/F2.svg';

import ExpandButton from "../Global/ExpandButton";
import CloseButton from "../Global/CloseButton";

const Section3C5 = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false); // Estado para manejar la apertura del lightbox
    const [currentImage, setCurrentImage] = useState(""); // Imagen actual del lightbox
    const [hoveredSection, setHoveredSection] = useState(null); // Estado para manejar qué sección está siendo hover

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
        <div className="relative min-h-screen w-full grid grid-cols-2 gap-0">

            {/* Sección 1 - INSECTOS */}
            <div 
                className="relative w-full h-full bg-black flex items-center justify-center"
                onMouseEnter={() => setHoveredSection('mariposas')}
                onMouseLeave={() => setHoveredSection(null)}
            >
                <div className="absolute w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${F1})` }}></div>
                <h2 className="absolute top-8 left-8 text-white text-5xl" style={{ fontFamily: 'GothamBold' }}>
                    INSECTOS
                    <div className="mt-2 w-[20vh] border-t-12 border-[#562E91]"></div> {/* Línea debajo del título */}
                </h2>

                {/* Texto hover */}
                {hoveredSection === 'mariposas' && (
                    <div className="absolute bottom-40 left-8 text-white transition-all duration-300">
                        <p className="text-2xl text-justify w-[50vh] max-w-md" style={{ fontFamily: 'GothamNormal' }}>
                            <span className='text-[#AC7EF0]'>+80 </span>especies de mariposas solamente en el área de occidente.
                        </p>
                    </div>
                )}

                {/* Botón de expandir - Abajo a la derecha */}
                <ExpandButton onClick={() => openLightbox(F1)} title="Agrandar" className="absolute bottom-8 right-8" />
            </div>

            {/* Sección 2 - AVES MIGRATORIAS */}
            <div 
                className="relative w-full h-full bg-black flex items-center justify-center"
                onMouseEnter={() => setHoveredSection('murcielagos')}
                onMouseLeave={() => setHoveredSection(null)}
            >
                <div className="absolute w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${F2})` }}></div>
                <h2 className="absolute bottom-12 right-8 text-white text-5xl" style={{ fontFamily: 'GothamBold' }}>
                    AVES MIGRATORIAS
                    <div className="absolute mt-2 w-[20vh] right-0 border-t-12 border-[#562E91]"></div> {/* Línea debajo del título */}
                </h2>

                {/* Texto hover */}
                {hoveredSection === 'murcielagos' && (
                    <div className="absolute top-20 right-10 text-white transition-all duration-300">
                        <p className="text-2xl text-justify w-[50vh] max-w-md" style={{ fontFamily: 'GothamNormal' }}>
                            <span className='text-[#AC7EF0]'>+90 </span>tipos de aves migratorias se alimentan y viven en los cafetales
                        </p>
                    </div>
                )}

                {/* Botón de expandir - Arriba a la izquierda */}
                <ExpandButton onClick={() => openLightbox(F2)} title="Agrandar" className="absolute top-8 left-8" />
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

        </div>
    );
};

export default Section3C5;