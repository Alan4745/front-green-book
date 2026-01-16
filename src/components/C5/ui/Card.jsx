import { useState, useEffect } from 'react';
import ExpandButton from '../../Global/ExpandButton';

const Card = ({
    image,
    Number,
    description,
    title,
    MaxW,
    className = "",
    width = "w-85",
    height = "h-85",
    style = {},
    highlightWords = [],
    onExpandClick = null
}) => {
    // Función para resaltar palabras específicas
    const highlightText = (text, wordsToHighlight) => {
        if (!wordsToHighlight || wordsToHighlight.length === 0) {
            return text;
        }

        let highlightedText = text;
        
        wordsToHighlight.forEach(word => {
            const regex = new RegExp(`\\b(${word})\\b`, 'gi');
            highlightedText = highlightedText.replace(regex, `<span style="color: #AC7EF0; font-weight:">$1</span>`);
        });

        return highlightedText;
    };

    // Estado para el tamaño de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Actualizar el tamaño de la ventana al cambiar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Ajuste dinámico del margen superior
    const marginTop = windowWidth > 1600 ? "mt-[50vw]" : "mt-[65vw]"; // Ajuste dinámico del margen superior

    // Verificar si es la card principal (grande)
    const isMainCard = className.includes('scale-y-220');

    return (
        <div
            className={`relative ${width} ${height} rounded-xl p-8 shadow-xl overflow-hidden ${className}`}
            style={{ 
                zIndex: 0,
                ...style
            }}
        >
            {/* Contenedor para la imagen de fondo */}
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1, // Aseguramos que la imagen esté detrás del contenido
                }}
            ></div>

            {/* Cover negro para la opacidad */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>

            {/* Contenedor flex para el número y el título */}
            <div
                className="absolute top-4 left-4 w-full flex items-center z-10"
                style={{
                    transform: className.includes('scale-y-220') ? 'scaleY(0.45) scaleX(0.67) scale(1.2)' : 'scaleY(1) scale(1)',
                    transformOrigin: 'left top',
                    transition: 'transform 0.7s ease-out'
                }}
            >
                {/* Número en círculo */}
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${Number})`, // Fondo con la imagen del número
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>

                {/* Título al lado del número */}
                <p 
                    className={`ml-4 w-[25vh] text-white text-lg ${className.includes('scale-y-220') ? 'opacity-0' : 'opacity-100'}`} 
                    style={{ 
                        fontFamily: 'GothamBold',
                        transition: 'opacity 0.7s ease-out'
                    }}
                >
                    {title}
                </p>

                {/* Descripción en la esquina inferior izquierda, no afectada por el escalado */}
                <div
                    className={`absolute ${marginTop} text-white text-2xl z-10 leading-none`}
                    style={{
                        fontFamily: 'GothamNormal',
                        maxWidth: MaxW,
                        textAlign: 'left',
                        zIndex: 10 
                    }}
                    dangerouslySetInnerHTML={{
                        __html: highlightText(description, highlightWords)
                    }}
                />

                {/* Botón de expandir - solo visible en la card principal */}
                {isMainCard && onExpandClick && (
                    <ExpandButton 
                        className="relative top-[0vh] left-[6.8vw]"
                        onClick={() => onExpandClick(image)} 
                        title="Ver imagen ampliada"
                    />
                )}
            </div>
        </div>
    );
};

export default Card;