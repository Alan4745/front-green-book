import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTransitionNavigate } from "./PageTransition";

// Mantenemos rutas aquí y pedimos etiquetas al i18n por id.
const MENU = [
    { id: "home", path: "/" },
    { id: "c1", path: "/c1" },
    { id: "c2", path: "/c2" },
    { id: "c3", path: "/c3" },
    { id: "c4", path: "/c4" },
    { id: "c5", path: "/c5" },
    { id: "c6", path: "/c6" },
    { id: "colab", path: "/colab" }
    ];

    function MainMenu() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useTransitionNavigate();
    const { pathname } = useLocation();

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

    // Cerrar con ESC
    useEffect(() => {
        const onKey = (e) => {
        if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    // Navegación al hacer clic
    const handleNavigate = (path) => {
        navigate(path);
        setOpen(false);
        window.scrollTo(0, 0)// Ir al tope de la página
    };

    const ariaLabel = open ? t("menu.close") : t("menu.open");
    const lng = i18n.resolvedLanguage || i18n.language || "es";

    return (
        <div className="z-50 fixed top-0 left-0 w-full pointer-events-none" ref={menuRef}>
        {/* Botón Hamburguesa */}
        <button
            onClick={() => setOpen((v) => !v)}
            className="pointer-events-auto absolute top-6 right-6 flex flex-col space-y-1 cursor-pointer "
            aria-label={ariaLabel}
            aria-expanded={open}
            aria-controls="mainmenu-popover"
        >
            <span className="w-6 h-[2px] bg-white block shadow-[0_1px_2px_rgba(0,0,0,0.4)]"></span>
            <span className="w-6 h-[2px] bg-white block shadow-[0_1px_2px_rgba(0,0,0,0.4)]"></span>
            <span className="w-6 h-[2px] bg-white block shadow-[0_1px_2px_rgba(0,0,0,0.4)]"></span>
        </button>

        {/* Menú desplegable */}
        {open && (
            <div
            id="mainmenu-popover"
            className="pointer-events-auto absolute top-12 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 bg-black/30 rounded-2xl p-6 backdrop-blur-md shadow-lg w-[90vw] lg:w-[380px]"
            role="menu"
            >
            <ul
                className="flex flex-col space-y-3 text-white text-xs text-right tracking-[0.08em] w-full"
                style={{ fontFamily: "GothamNormal" }}
            >
                {MENU.map(({ id, path }) => {
                const raw = t(`menu.items.${id}`, id);
                const labelUpper =
                    typeof raw === "string" ? raw.toLocaleUpperCase(lng) : String(raw).toUpperCase();

                const isActive = pathname === path;
                return (
                    <li key={id} className="transition w-full text-right">
                    <button
                        onClick={() => handleNavigate(path)}
                        className={`w-full text-right hover:font-semibold ${
                        isActive ? "font-semibold" : "font-normal"
                        }`}
                        role="menuitem"
                        aria-current={isActive ? "page" : undefined}
                        title={raw}
                    >
                        {labelUpper}
                    </button>
                    </li>
                );
                })}
            </ul>
            </div>
        )}
        </div>
    );
}

export default MainMenu;