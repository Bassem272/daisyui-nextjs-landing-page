// // context/LanguageContext.js
// import React, { createContext, useContext, useState } from 'react';
// import { IntlProvider } from 'react-intl';
// import messages_en from '../locales/en.json'; // English messages
// import messages_ar from '../locales/ar.json'; // Arabic messages

// const messages = {
//   en: messages_en,
//   ar: messages_ar,
// };

// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [locale, setLocale] = useState('en');

//   const toggleLanguage = () => {
//     setLocale(locale === 'en' ? 'ar' : 'en');
//   };

//   return (
//     <LanguageContext.Provider value={{ locale, toggleLanguage }}>
//       <IntlProvider locale={locale} messages={messages[locale]}>
//         {children}
//       </IntlProvider>
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => useContext(LanguageContext);
import React, { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import messages_en from '../locales/en.json'; // English messages
import messages_ar from '../locales/ar.json'; // Arabic messages

const messages = {
  en: messages_en,
  ar: messages_ar,
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]} defaultLocale="en">
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
