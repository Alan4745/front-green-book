const Card = ({
    image,
    Number,
    description, // Agregamos el texto que se mostrará
    className = "",
    width = "w-85",
    height = "h-85",
    style = {}
}) => {
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

            {/* Contenedor flex para el número y el texto - Aplicamos counter-scale y zoom */}
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

                {/* Texto al lado del número */}
                <p className="ml-4 w-[20vh] text-white text-[1.8vh] font-bold">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;