import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
    { code: "en", label: "English", region: "United States" },
    { code: "es", label: "Español", region: "Latinoamérica" }
];

const LanguageSelector = ({
    // 🎨 Colores configurables (defaults = blanco como pediste)
    textColor = "#FFFFFF",
    subtextColor = "rgba(255,255,255,0.6)",
    buttonBg = "rgba(255,255,255,0.2)",
    menuBg = "rgba(255,255,255,0.2)",
    activeBg = "#FFFFFF",
    activeTextColor = "#000000",
    alignment = "left"
}) => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    // Idioma actual resuelto por i18next (o localStorage si hubiera)
    const current =
        i18n.resolvedLanguage ||
        i18n.language ||
        (typeof window !== "undefined" ? localStorage.getItem("lang") : "es") ||
        "es";

    const selected = useMemo(
        () => LANGS.find((l) => l.code === current) || LANGS[0],
        [current]
    );

    const handleSelect = (lang) => {
        if (!lang || lang.code === current) {
            setOpen(false);
            return;
        }
        // Cambia idioma global
        i18n.changeLanguage(lang.code);
        // Refuerza persistencia (además del detector, si lo configuraste)
        try {
            localStorage.setItem("lang", lang.code);
        } catch (_) {}
        setOpen(false);
    };

    // 🎛️ Estilos inline que NO cambian layout/clases; solo color
    const btnStyle = {
        backgroundColor: buttonBg,
        color: textColor
    };

    const menuStyle = {
        backgroundColor: menuBg,
        color: textColor
    };

    const labelStyle = {
        color: textColor
    };

    const regionStyle = {
        color: subtextColor
    };

    return (


        //Version para la izquierda inferior derecha

        <>

        {alignment=="left" ?  

        <div style={{position:"fixed", left:"1vw", bottom:"2vh"}}>
            {/* Botón principal */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center space-x-2 px-4 py-3 bg-white/20 text-white rounded-full backdrop-blur-md text-sm font-Gotham hover:bg-white/30 transition"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Language selector"
                style={btnStyle}
            >
                <span className="font-bold" style={labelStyle}>{selected.label}</span>
                <span className="opacity-60 font-normal" style={regionStyle}>{selected.region}</span>
            </button>

            {/* Menú hacia arriba */}
            {open && (
                <div
                    className="absolute bottom-full left-0 mb-2 bg-white/20 backdrop-blur-md text-white rounded-xl shadow-lg z-50 min-w-max p-1"
                    role="listbox"
                    style={menuStyle}
                >
                    {LANGS.map((lang) => {
                        const active = lang.code === current;

                        // Estilo por opción (respeta clases, solo color/fondo)
                        const optionStyle = active
                            ? { backgroundColor: activeBg, color: activeTextColor }
                            : { color: textColor };

                        const optionSubStyle = active
                            ? { color: `${activeTextColor}B3` } // ~70% opacidad
                            : { color: subtextColor };

                        return (
                            <button
                                key={lang.code}
                                onClick={() => handleSelect(lang)}
                                className={`block px-4 py-2 rounded-md text-sm w-full text-left font-Gotham transition
                    ${active ? "bg-white text-black font-bold" : "hover:bg-white/30 opacity-90"}`}
                                role="option"
                                aria-selected={active}
                                style={optionStyle}
                            >
                                {lang.label}
                                <span
                                    className={`opacity-60 ml-[0.5vh] font-normal ${active ? "text-black/70" : ""}`}
                                    style={optionSubStyle}
                                >
                                    {" "}
                                    {lang.region}
                                </span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>

        : 

        <div style={{position:"fixed", right:"1vw", bottom:"2vh"}}>
            {/* Botón principal */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center space-x-2 px-4 py-3 bg-white/20 text-white rounded-full backdrop-blur-md text-sm font-Gotham hover:bg-white/30 transition"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Language selector"
                style={btnStyle}
            >
                <span className="font-bold" style={labelStyle}>{selected.label}</span>
                <span className="opacity-60 font-normal" style={regionStyle}>{selected.region}</span>
            </button>

            {/* Menú hacia arriba */}
            {open && (
                <div
                    className="absolute bottom-full left-0 mb-2 bg-white/20 backdrop-blur-md text-white rounded-xl shadow-lg z-50 min-w-max p-1"
                    role="listbox"
                    style={menuStyle}
                >
                    {LANGS.map((lang) => {
                        const active = lang.code === current;

                        // Estilo por opción (respeta clases, solo color/fondo)
                        const optionStyle = active
                            ? { backgroundColor: activeBg, color: activeTextColor }
                            : { color: textColor };

                        const optionSubStyle = active
                            ? { color: `${activeTextColor}B3` } // ~70% opacidad
                            : { color: subtextColor };

                        return (
                            <button
                                key={lang.code}
                                onClick={() => handleSelect(lang)}
                                className={`block px-4 py-2 rounded-md text-sm w-full text-left font-Gotham transition
                    ${active ? "bg-white text-black font-bold" : "hover:bg-white/30 opacity-90"}`}
                                role="option"
                                aria-selected={active}
                                style={optionStyle}
                            >
                                {lang.label}
                                <span
                                    className={`opacity-60 ml-[0.5vh] font-normal ${active ? "text-black/70" : ""}`}
                                    style={optionSubStyle}
                                >
                                    {" "}
                                    {lang.region}
                                </span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
        
        }

        </>
    );
};

export default LanguageSelector;