const CardColor = ({ 
    bgColor = "#DA2F7D", 
    circleColor = "#DA2F7D",
    children,
    className = "",
    width = "w-85",
    height = "h-135"
    }) => {
    return (
        <div 
        className={`relative ${width} ${height} rounded-3xl p-8 shadow-xl overflow-hidden ${className}`}
        style={{ backgroundColor: `${bgColor}D0` }} // D0 en hex = 80% transparencia
        >
            
            {/* Contenido de la tarjeta */}
            <div className="relative z-10 h-full flex flex-col justify-between text-white">
                {children}
            </div>
        
        </div>
    );
};

export default CardColor;