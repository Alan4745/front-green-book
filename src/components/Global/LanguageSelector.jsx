import React, { useState } from "react";

const languages = [
    { label: "English", region: "United States" },
    { label: "Español", region: "Latinoamérica" },
];

const LanguageSelector = () => {
    const [selected, setSelected] = useState(languages[0]);
    const [open, setOpen] = useState(false);

    const handleSelect = (lang) => {
        setSelected(lang);
        setOpen(false);
    };

    return (
        <div className="relative">
        {/* Botón principal */}
        <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 px-4 py-3 bg-white/20 text-white rounded-full backdrop-blur-md text-sm font-Gotham hover:bg-white/30 transition"
        >
            <span className="font-bold">{selected.label}</span>
            <span className="opacity-60 font-normal">{selected.region}</span>
        </button>

        {/* Menú hacia arriba */}
        {open && (
            <div className="absolute bottom-full left-0 mb-2 bg-white/20 backdrop-blur-md text-white rounded-xl shadow-lg z-50 min-w-max">
            {languages.map((lang, idx) => (
                <button
                key={idx}
                onClick={() => handleSelect(lang)}
                className={`block px-4 py-2 rounded-md text-sm hover:bg-white/30 w-full text-left font-Gotham font-bold ${
                    lang.label === selected.label ? "font-bold" : "opacity-80"
                }`}
                >
                {lang.label} <span className="opacity-60 ml-[0.5vh] font-normal"> {lang.region}</span>
                </button>
            ))}
            </div>
        )}
        </div>
    );
};

export default LanguageSelector;