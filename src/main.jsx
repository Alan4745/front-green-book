import React, { useEffect } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 👇 Asegúrate de que este archivo existe (según el paso 1 que hiciste):
// /src/i18n/index.js  (o ajusta la ruta si la tienes distinta)
import './i18n';
import i18n from 'i18next';

function HtmlLangUpdater() {
  useEffect(() => {
    const applyHtmlAttrs = () => {
      const lng = i18n.language || 'es';
      document.documentElement.lang = lng;

      // Si en el futuro agregas idiomas RTL (árabe, hebreo, etc.)
      const isRTL = ['ar', 'he', 'fa', 'ur'].includes(lng);
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    };

    // Aplicar al inicializar
    applyHtmlAttrs();
    // React a cambios de idioma
    i18n.on('languageChanged', applyHtmlAttrs);
    return () => i18n.off('languageChanged', applyHtmlAttrs);
  }, []);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HtmlLangUpdater />
    <App />
  </StrictMode>,
);