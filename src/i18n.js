import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locale/en.json'
import ms from './locale/ms.json'

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('en'),
    init: () => {},
    cacheUserLanguage: () => {},
};
  
i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
        en: {
            translation: en
        },
        ms: {
            translation: ms
        },
    },
});

export default i18n;