import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HoverButton = ({ 
    text = "Hover Me", 
    textOffset = -120, 
    hoverOffset = -10, 
    link,   // 🌍 Link externo/interno
    to,     // 🔄 Navegación React Router
    color = "white" 
}) => {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    // Detectamos si el link es externo
    const isExternal = link?.startsWith("http://") || link?.startsWith("https://");

    // 🔥 Contraste automático
    const getContrastColor = (bgColor) => {
        return (bgColor?.toLowerCase() === "white" || bgColor === "#fff" || bgColor === "#ffffff")
            ? "black"
            : "white";
    };

    const iconColor = getContrastColor(color);

    // 🖱️ Acción al hacer click
    const handleClick = (e) => {
        if (to) {
            e.preventDefault();
            navigate(to);
        }
    };

    return (
        <a
            href={link || (to ? "#" : undefined)}
            {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            onClick={handleClick}
            role="link"
            className="relative flex items-center justify-center flex-row w-[400px] h-[120px] text-[2vh] tracking-wide no-underline transition-all duration-300 cursor-pointer"
            style={{ color: color }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Círculo de borde */}
            <div
                className={`absolute top-[25px] left-[10px] w-[60px] h-[60px] rounded-full border transition-all duration-300 flex items-center justify-center ${
                    hover ? "scale-0" : "scale-100"
                }`}
                style={{ borderColor: color }}
                >
                {/* The Chevron */}
                <span 
                    className="w-[15px] h-[15px] border-t-2 border-r-2 transform rotate-225 translate-x-[4px]"
                    style={{ borderColor: color }}
                ></span>
            </div>

            {/* Círculo sólido con ícono */}
            <div
                className={`absolute top-[25px] left-[10px] w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-300 ${
                    hover ? "scale-100" : "scale-0"
                }`}
                style={{ backgroundColor: color }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    stroke={iconColor}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>

            {/* Texto */}
            <span
                className="transition-all duration-300 -mt-[1.5vh]"
                style={{
                    fontFamily: "GothamNormal",
                    marginLeft: hover ? `${hoverOffset}px` : `${textOffset}px`,
                    whiteSpace: "pre-line",
                    lineHeight: "1.3"
                }}
            >
                {text}
            </span>
        </a>
    );
};

export default HoverButton;