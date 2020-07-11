import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import indexEn from "../../public/locales/en/index.json";
import indexLv from "../../public/locales/lv/index.json";
import indexRu from "../../public/locales/ru/index.json";

const resources = {
  en: {
    index: indexEn,
  },
  lv: {
    index: indexLv,
  },
  ru: {
    index: indexRu,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // react: {
    //   useSuspense: false,
    // },
  });

export default i18n;
