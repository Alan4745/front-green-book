import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" }
];

const LanguageSelector = ({
    textColor = "#FFFFFF",
    buttonBg = "rgba(255,255,255,0.2)",
    menuBg = "rgba(255,255,255,0.2)",
    alignment = "left",
    inline = false
}) => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const current =
        i18n.resolvedLanguage ||
        i18n.language ||
        (typeof window !== "undefined" ? localStorage.getItem("lang") : "es") ||
        "es";

    const selected = useMemo(
        () => LANGS.find((l) => l.code === current) || LANGS[0],
        [current]
    );

    // Solo muestra los idiomas que NO están seleccionados
    const others = LANGS.filter((l) => l.code !== current);

    const handleSelect = (lang) => {
        i18n.changeLanguage(lang.code);
        try { localStorage.setItem("lang", lang.code); } catch (_) {}
        setOpen(false);
    };

    const positionStyle = inline ? {} : {
        position: "fixed",
        bottom: "2vh",
        ...(alignment === "left" ? { left: "1vw" } : { right: "1vw" })
    };

    return (
        <div style={positionStyle}>

            {/* Botón unificado: label + flecha a la derecha */}
            <button
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Cambiar idioma"
                style={{ backgroundColor: buttonBg, color: textColor }}
                className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition"
            >
                <span className="text-sm font-bold font-Gotham select-none">
                    {selected.label}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease"
                    }}
                >
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </button>

            {/* Dropdown — solo aparecen los OTROS idiomas */}
            {open && (
                <div
                    className="absolute bottom-full left-0 mb-2 backdrop-blur-md rounded-xl shadow-lg z-50 min-w-max p-1"
                    role="listbox"
                    style={{ backgroundColor: menuBg, color: textColor }}
                >
                    {others.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang)}
                            className="block px-4 py-2 rounded-md text-sm w-full text-left font-Gotham transition hover:bg-white/30"
                            role="option"
                            aria-selected={false}
                            style={{ color: textColor }}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;