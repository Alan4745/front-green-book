import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const SUPPORTED = ["es", "en"];
const DEFAULT_LNG = "es";

const detectLang = () => {
  const stored = localStorage.getItem("lang");
  if (stored && SUPPORTED.includes(stored)) return stored;
  const browser = navigator.language?.slice(0, 2);
  return SUPPORTED.includes(browser) ? browser : DEFAULT_LNG;
};

const loadTranslation = (lng) =>
  import(`../locales/${lng}/common.json`).then((m) => m.default);

const initialLng = detectLang();
const initialTranslation = await loadTranslation(initialLng);

i18n.use(initReactI18next).init({
  resources: {
    [initialLng]: { translation: initialTranslation },
  },
  lng: initialLng,
  fallbackLng: DEFAULT_LNG,
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});

i18n.on("languageChanged", async (lng) => {
  if (SUPPORTED.includes(lng) && !i18n.hasResourceBundle(lng, "translation")) {
    const translation = await loadTranslation(lng);
    i18n.addResourceBundle(lng, "translation", translation);
  }
  localStorage.setItem("lang", lng);
});

export default i18n;
