import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import indexEn from "../../public/locales/en/index.json";
import indexLv from "../../public/locales/lv/index.json";
import indexRu from "../../public/locales/ru/index.json";

import studioEn from "../../public/locales/en/studio.json";
import studioLv from "../../public/locales/lv/studio.json";
import studioRu from "../../public/locales/ru/studio.json";

import contactEn from "../../public/locales/en/contact.json";
import contactLv from "../../public/locales/lv/contact.json";
import contactRu from "../../public/locales/ru/contact.json";

import footerAndCookiesEn from "../../public/locales/en/footerAndCookies.json";
import footerAndCookiesLv from "../../public/locales/lv/footerAndCookies.json";
import footerAndCookiesRu from "../../public/locales/ru/footerAndCookies.json";

import contactFormEn from "../../public/locales/en/contactForm.json";
import contactFormLv from "../../public/locales/lv/contactForm.json";
import contactFormRu from "../../public/locales/ru/contactForm.json";

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
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // react: {
    //   useSuspense: false,
    // },
  });

export default i18n;
