import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  resources: {
    ru: {
      translation: {
        messages_one: 'У вас {{count}} непрочитанное сообщение',
        messages_few: 'У вас {{count}} непрочитанных сообщения',
        messages_many: 'У вас {{count}} непрочитанных сообщений',
        messages_other: 'У вас {{count}} непрочитанных сообщений',
      },
    },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
