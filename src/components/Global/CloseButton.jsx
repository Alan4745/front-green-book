import React from "react";

const CloseButton = ({
    onClick,
    className = "",
    positionClass = "absolute top-12 right-14",
    ...props
}) => {
    return (
        <button
            onClick={onClick}
            aria-label="Cerrar"
            className={`${positionClass} h-10 w-10 rounded-full bg-white/70 hover:bg-white/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white grid place-items-center ${className}`}
            {...props}
        >
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M6 6l12 12M18 6L6 18" />
            </svg>
        </button>
    );
};

export default CloseButton;
