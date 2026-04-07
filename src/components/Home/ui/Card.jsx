import React from 'react';
import { useTransitionNavigate } from '../../Global/PageTransition';

const Card = ({ text = "Default Text", bgImage = "/Img/Start/Caps/bg1.svg", chapter }) => {
    const navigateTo = useTransitionNavigate();

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#000000',
    };

    return (
        <div
            style={backgroundStyle}
            className={`h-105 w-70 max-lg:h-[38vh] max-lg:w-full flex flex-col justify-between p-4 max-lg:p-3 shadow-md`}
        >
            {/* Text Section */}
            <div className="flex-grow flex items-center justify-center">
                <h2 className="text-white text-[2.5vh] text-left leading-[1.15] mt-[15vh] max-lg:mt-[6vh]" style={{ fontFamily: 'GothamBold' }}>
                    {text}
                </h2>
            </div>

            {/* Button Section */}
            <div className="flex justify-end">
                {/* Botón que redirige al capítulo con transición */}
                <button
                    onClick={() => navigateTo(`/${chapter}`)}
                    className="border-1 border-white border-opacity-50 rounded-full p-2 bg-transparent hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Card;
