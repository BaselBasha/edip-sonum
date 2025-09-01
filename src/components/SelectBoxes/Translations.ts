import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../../../public/locales/en/english.json"
import arTranslations from "../../../public/locales/ar/arabic.json";
import trTranslations from "../../../public/locales/tr/turkish.json";
import ruTranslations from "../../../public/locales/ru/russian.json";
import deTranslations from "../../../public/locales/de/germany.json"

const resources = {
    en: { translation: enTranslations, dir: 'ltr' },
    ar: { translation: arTranslations, dir: 'rtl' },
    tr: { translation: trTranslations, dir: 'ltr' },
    ru: { translation: ruTranslations, dir: 'ltr' },
    de: { translation: deTranslations, dir: 'ltr' },


};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ar",
        fallbackLng: "en",
    });

export default i18n;