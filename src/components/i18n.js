import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import indexEn from "../locales/en/index.json";
import indexLv from "../locales/lv/index.json";
import indexRu from "../locales/ru/index.json";

import studioEn from "../locales/en/studio.json";
import studioLv from "../locales/lv/studio.json";
import studioRu from "../locales/ru/studio.json";

import contactEn from "../locales/en/contact.json";
import contactLv from "../locales/lv/contact.json";
import contactRu from "../locales/ru/contact.json";

import footerAndCookiesEn from "../locales/en/footerAndCookies.json";
import footerAndCookiesLv from "../locales/lv/footerAndCookies.json";
import footerAndCookiesRu from "../locales/ru/footerAndCookies.json";

import contactFormEn from "../locales/en/contactForm.json";
import contactFormLv from "../locales/lv/contactForm.json";
import contactFormRu from "../locales/ru/contactForm.json";

const resources = {
  en: {
    index: indexEn,
    studio: studioEn,
    contact: contactEn,
    footerAndCookies: footerAndCookiesEn,
    contactForm: contactFormEn,
  },
  lv: {
    index: indexLv,
    studio: studioLv,
    contact: contactLv,
    footerAndCookies: footerAndCookiesLv,
    contactForm: contactFormLv,
  },
  ru: {
    index: indexRu,
    studio: studioRu,
    contact: contactRu,
    footerAndCookies: footerAndCookiesRu,
    contactForm: contactFormRu,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
