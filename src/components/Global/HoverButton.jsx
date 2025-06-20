import { useState } from "react";

const HoverButton = ({ text = "Hover Me" }) => {
    const [hover, setHover] = useState(false);

    return (
        <a
        href="#"
        role="link"
        className="relative flex items-center justify-center flex-row w-[400px] h-[120px] text-white text-[2vh] tracking-wide no-underline"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
        {/* Circle */}
        <div
            className={`absolute top-[25px] left-[35px] w-[80px] h-[80px] rounded-full border border-white transition-all duration-300 ${
            hover ? "scale-0" : "scale-100"
            }`}
        ></div>

        {/* White Circle */}
        <div
            className={`absolute top-[25px] left-[35px] w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
            hover ? "scale-100" : "scale-0"
            }`}
        >
            {/* Flecha icono */}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
            />
            </svg>
        </div>

        {/* Texto */}
        <span
            className={`transition-all duration-300 mt-[1vh] ${
            hover ? "ml-[-25px]" : "ml-[-150px]"
            }`}
            style={{ fontFamily: "GothamNormal" }}
        >
            {text}
        </span>
        </a>
    );
};

export default HoverButton;