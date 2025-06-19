import React, { useState, useEffect, useRef } from "react";

const menuItems = [
    "INICIO",
    "EL CAFÉ EN GUATEMALA",
    "LAS 8 REGIONES DEL CAFÉ",
    "SISTEMAS AGROFORESTALES",
    "BENEFICIOS ECOSISTÉMICOS",
    "REFUGIO PARA LA DIVERSIDAD",
    "COMPROMISO CON LA SOSTENIBILIDAD",
];

const MainMenu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    // Cerrar menú si se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative z-50" ref={menuRef}>
        {/* Botón Hamburguesa */}
        <button
            onClick={() => setOpen(!open)}
            className="absolute top-6 right-6 flex flex-col space-y-1"
        >
            <span className="w-6 h-[2px] bg-white block"></span>
            <span className="w-6 h-[2px] bg-white block"></span>
            <span className="w-6 h-[2px] bg-white block"></span>
        </button>

        {/* Menú desplegable */}
        {open && (
            <div className="absolute top-12 right-6 bg-black/30 rounded-2xl p-6 backdrop-blur-md shadow-lg w-[320px]">
                <ul className="flex flex-col space-y-4 text-white font-light uppercase text-sm font-Gotham font-normal text-right">
                {menuItems.map((item, idx) => (
                    <li key={idx} className="hover:font-semibold transition">
                    <button onClick={() => setOpen(false)}>{item}</button>
                    </li>
                ))}
                </ul>
            </div>
            )}
        </div>
    );
};

export default MainMenu;