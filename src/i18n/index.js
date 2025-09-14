import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Carga estática (simple). Si quieres code-splitting, te paso versión con dynamic import luego.
import es from "../locales/es/common.json";
import en from "../locales/en/common.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
        es: { translation: es },
        en: { translation: en },
        },
        fallbackLng: "es",
        supportedLngs: ["es", "en"],
        // Detección y cacheo
        detection: {
        order: ["localStorage", "querystring", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "lang",
        lookupQuerystring: "lang",
        },
        interpolation: { escapeValue: false },
        returnEmptyString: false,
    });

export default i18n;