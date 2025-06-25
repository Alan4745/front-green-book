import React from "react";

const BackButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-[7vh] h-[7vh] flex items-center justify-center rounded-full border border-white bg-transparent transition-transform duration-300 hover:scale-110"
            title="Regresar"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={1.2}
                className="w-[3vh] h-[3vh]"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    );
};

export default BackButton;