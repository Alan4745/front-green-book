import React from 'react';
import { useTransitionNavigate } from '../../Global/PageTransition';

const Card = ({ text = "Default Text", bgImage = "/Img/Start/Caps/bg1.webp", chapter, compactLandscape = false, priority = false }) => {
    const navigateTo = useTransitionNavigate();

    const cardClassName = compactLandscape
        ? "relative overflow-hidden h-[39vh] w-full flex flex-col justify-between p-3 shadow-md bg-black"
        : "relative overflow-hidden h-105 w-70 max-lg:h-[38vh] max-lg:landscape:h-[46vh] max-lg:w-full flex flex-col justify-between p-4 max-lg:p-3 max-lg:landscape:p-4 shadow-md bg-black";

    const titleClassName = compactLandscape
        ? "text-white text-[1.95vh] text-left leading-[1.1] mt-[5.5vh]"
        : "text-white text-[2.5vh] max-lg:text-[2vh] max-lg:landscape:text-[2.3vh] text-left leading-[1.15] mt-[15vh] max-lg:mt-[6vh] max-lg:landscape:mt-[8vh]";

    return (
        <div className={cardClassName}>
            <img
                src={bgImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading={priority ? "eager" : "lazy"}
                fetchpriority={priority ? "high" : "low"}
                decoding={priority ? "sync" : "async"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

            <div className="relative flex-grow flex items-center justify-center">
                <h2 className={titleClassName} style={{ fontFamily: 'GothamBold' }}>
                    {text}
                </h2>
            </div>

            <div className="relative flex justify-end">
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
