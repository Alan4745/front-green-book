import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
    { label: "INICIO", path: "/" },
    { label: "EL CAFÉ EN GUATEMALA", path: "/c1" },
    { label: "LAS 8 REGIONES DEL CAFÉ", path: "/c2" },
    { label: "SISTEMAS AGROFORESTALES", path: "/c3" },
    { label: "BENEFICIOS ECOSISTÉMICOS", path: "/c4" },
    { label: "REFUGIO PARA LA DIVERSIDAD", path: "/c5" },
    { label: "COMPROMISO CON LA SOSTENIBILIDAD", path: "/c6" },
];

const MainMenu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const navigate = useNavigate();

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

    // Navegación al hacer clic
    const handleNavigate = (path) => {
        navigate(path);
        setOpen(false);
    };

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
                        {menuItems.map(({ label, path }, idx) => (
                            <li key={idx} className="hover:font-semibold transition">
                                <button onClick={() => handleNavigate(path)}>{label}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MainMenu;