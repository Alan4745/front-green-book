import React from "react";

const ZoomButton = () => {
    return (
        <button
        className="border border-white rounded-full p-3 bg-transparent transition-transform duration-300 hover:scale-110"
        title="Expandir imagen"
        >
        <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
        >
            <path d="M15 3h6v6M21 3l-8 8M9 21H3v-6M3 21l8-8" />
        </svg>
        </button>
    );
};

export default ZoomButton;