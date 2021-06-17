import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: {
        appTitle: string;
        navigatingAway: string;
        action: {
          cancel: string;
          discardChanges: string;
          ok: string;
        };
        sidebar: {
          disclaimer: string;
          home: string;
          routingDemo: string;
        };
        topBar: {
          menu: string;
        };
        unsavedChangesDialog: {
          header: string;
        };
      };
      demo: {
        home: {
          editToReload: string;
          learnReact: string;
          welcome: string;
        };
        routingDemo: {
          header: string;
          intro: string;
          routeChangeMessage: string;
        };
      };
    };
  }
}

i18next
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    defaultNS: 'common',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    supportedLngs: ['en'],
  });

export default i18next;
