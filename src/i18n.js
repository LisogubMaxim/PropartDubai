import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import engTranslation from "./languages/eng.json";
import uaTranslation from "./languages/ua.json";
import ruTranslation from "./languages/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: engTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
    // ua: {
    //   translation: uaTranslation,
    // },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
