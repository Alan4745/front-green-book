import React, { useState } from 'react';
import BigSlider from './ui/BigSlider';
import HoverButton from '../Global/HoverButton';

// Asegúrate de que las rutas sean correctas
import F1 from '../../assets/C5/F1.svg'; 
import F2 from '../../assets/C5/F2.svg'; 
import F3 from '../../assets/C5/F3.svg';

import Number1 from '../../assets/C5/Numbers/Number1.png';
import Number2 from '../../assets/C5/Numbers/Number2.svg';
import Number3 from '../../assets/C5/Numbers/Number3.svg';

const Section1C5 = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    // Función para abrir el lightbox
    const openLightbox = (img) => {
        setCurrentImage(img);
        setIsLightboxOpen(true);
    };

    // Función para cerrar el lightbox
    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    // Componente CloseButton
    const CloseButton = ({ onClick, className = "" }) => {
        return (
            <button
                type="button"
                onClick={onClick}
                className={`h-10 w-10 rounded-full hover:bg-white/25 border-2 border-white text-white grid place-items-center backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/70 ${className}`}
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
        );
    };
    const slidesData = [
        {
            image: F1,
            title: "Hojarasca",
            description: "La hojarasca alberga insectos como hormigas, escarabajos y gusanos.",
            Number: Number1,
            highlightWords: ["hojarasca"]
        },
        {
            image: F2,
            title: "Orquídeas, bromelias, musgos y líquenes",
            description: "Las epífitas como orquídeas, bromelias, musgos y líquenes alojan artrópodos esenciales.",
            Number: Number2,
            highlightWords: ["orquídeas", "bromelias", ",", "y", "musgos", "líquenes"]
        },
        {
            image: F3,
            title: "Ingas",
            description: "Los árboles de sombra como las Ingas dan alimento y refugio a múltiples especies.",
            Number: Number3,
            MaxW: '90%',
            highlightWords: ["Ingas"]
        },
    ];

    return (
        <div className="relative min-h-screen w-full flex bg-[#562E91] bg-no-repeat bg-center bg-cover items-center justify-center">

            {/* Botón de hover con link */}
            <div className="absolute top-6 right-[-6vh] z-50">
                <HoverButton 
                    text="EXPLORAR MÁS" 
                    textOffset={-80} 
                    hoverOffset={30} 
                    link="https://reservasdeguatemala.org/" 
                />
            </div>

            {/* Título ajustado */}
            <h2 className='absolute top-[18vh] right-[44.8vh] text-white text-[5vh]' style={{ fontFamily: 'GothamBold' }}>
                ECOSISTEMAS EN ACCIÓN
            </h2>

            {/* Primer párrafo ajustado */}
            <p className='absolute w-[30%] text-justify text-white text-[2.2vh] top-[28vh] left-[43.2vw]' style={{ fontFamily: 'GothamNormal' }}>
                Desde hace más de tres millones de años Guatemala es un epicentro de la biodiversidad en Mesoamérica, donde los sistemas agroforestales de café son clave para la conservación.
            </p>

            {/* Segundo párrafo ajustado */}
            <p className='relative w-[35%] text-justify text-white text-[2.2vh] left-[11vw] mb-10' style={{ fontFamily: 'GothamNormal' }}>
                Plantas, hojas y árboles interactúan para proteger a miles de insectos, artrópodos, aves y otras especies.
            </p>

            {/* Slider al fondo */}
            <div className='absolute bottom-[4vh] w-full flex justify-center'>
                <BigSlider slides={slidesData} onExpandClick={openLightbox} />
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
        </div>

    );
};

export default Section1C5;