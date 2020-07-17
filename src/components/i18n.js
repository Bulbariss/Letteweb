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

import privacyAnd404En from "../locales/en/privacyAnd404.json";
import privacyAnd404Lv from "../locales/lv/privacyAnd404.json";
import privacyAnd404Ru from "../locales/ru/privacyAnd404.json";

import projectsEn from "../locales/en/projects.json";
import projectsLv from "../locales/lv/projects.json";
import projectsRu from "../locales/ru/projects.json";

import SEOEn from "../locales/en/SEO.json";
import SEOLv from "../locales/lv/SEO.json";
import SEORu from "../locales/ru/SEO.json";

const resources = {
  en: {
    index: indexEn,
    studio: studioEn,
    contact: contactEn,
    footerAndCookies: footerAndCookiesEn,
    contactForm: contactFormEn,
    privacyAnd404: privacyAnd404En,
    projects: projectsEn,
    SEO: SEOEn,
  },
  lv: {
    index: indexLv,
    studio: studioLv,
    contact: contactLv,
    footerAndCookies: footerAndCookiesLv,
    contactForm: contactFormLv,
    privacyAnd404: privacyAnd404Lv,
    projects: projectsLv,
    SEO: SEOLv,
  },
  ru: {
    index: indexRu,
    studio: studioRu,
    contact: contactRu,
    footerAndCookies: footerAndCookiesRu,
    contactForm: contactFormRu,
    privacyAnd404: privacyAnd404Ru,
    projects: projectsRu,
    SEO: SEORu,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    load: "languageOnly",
    supportedLngs: ["en", "lv", "ru"],
    debug: false,
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
