import { useState } from "react";

const HoverButton = ({ 
    text = "Hover Me", 
    textOffset = -120, 
    hoverOffset = -10, 
    link = "#" 
}) => {
    const [hover, setHover] = useState(false);

    // Verificamos si es un link externo (comienza con http o https)
    const isExternal = link.startsWith("http://") || link.startsWith("https://");

    return (
        <a
            href={link}
            {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            role="link"
            className="relative flex items-center justify-center flex-row w-[400px] h-[120px] text-white text-[2vh] tracking-wide no-underline"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Círculo de borde blanco */}
            <div
                className={`absolute top-[25px] left-[35px] w-[80px] h-[80px] rounded-full border border-white transition-all duration-300 ${
                    hover ? "scale-0" : "scale-100"
                }`}
            ></div>

            {/* Círculo blanco sólido con ícono */}
            <div
                className={`absolute top-[25px] left-[35px] w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
                    hover ? "scale-100" : "scale-0"
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>

            {/* Texto con margen dinámico */}
            <span
                className="transition-all duration-300 mt-[1vh]"
                style={{
                    fontFamily: "GothamNormal",
                    marginLeft: hover ? `${hoverOffset}px` : `${textOffset}px`,
                }}
            >
                {text}
            </span>
        </a>
    );
};

export default HoverButton;