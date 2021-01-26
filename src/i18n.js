import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
            translation: {
                hello: 'Hello world',
                change: 'Change language',
                go: 'Go to settings',
                settings: 'Settings',
            },
        },
        ms: {
            translation: {
                hello: 'Hai Dunia',
                change: 'Tukar bahasa',
                go: 'Pergi ke tetapan',
                settings: 'Tetapan'
            },
        },
    },
});

export default i18n;