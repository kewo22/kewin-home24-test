import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "de",
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        category_1: "Furniture",
        category_2: "Lamps",
        category_3: "Textiles",
        category_4: "Children",
        category_5: "Kitchen",
        category_6: "Bath",
        category_7: "Christmas",
        category_8: "BUTLERS",
        category_9: "Brands",
        category_10: "Shop the look",
        category_11: "Stores",
        category_12: "Sale",
      },
    },
    de: {
      translation: {
        category_1: "Möbel",
        category_2: "Lampen",
        category_3: "Textilien",
        category_4: "Kinder",
        category_5: "Küche",
        category_6: "Bad",
        category_7: "Weihnachten",
        category_8: "BUTLERS",
        category_9: "Marken",
        category_10: "Shop the Look",
        category_11: "Store",
        category_12: "Sale",
      },
    },
  },
});

export default i18n;
