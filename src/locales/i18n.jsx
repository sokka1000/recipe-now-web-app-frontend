import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en";

i18next
     .use(initReactI18next)
     .use(LanguageDetector)
     .init({
          fallbackLng: "en",
          resources: { en: en },
     });
