import { use } from "i18next";
import langueDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const i18n = use(langueDetector)
  .use(initReactI18next)
  .init({
    fallbacklng: "en",
    debug: false,
    resources: {
      en: {
        translation: require(`./locales/en/english.json`),
      },
      uk: {
        translation: require("./locales/uk/ukraine.json"),
      },
    },
    detection: {
      order: ["localStorage", "navigator"],
    },
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18n;
