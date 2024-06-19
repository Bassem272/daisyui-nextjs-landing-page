// import { useTranslation } from 'next-i18next';
// import { Menu, MenuButton, Transition, MenuItems, MenuItem } from '@headlessui/react';
// import { Fragment } from 'react';

// function LanguageSwitcher() {
//   const { t, i18n } = useTranslation('common');

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           Language
//         </MenuButton>
//       </div>
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <MenuItem>
//               {({ focus }) => (
//                 <button
//                   onClick={() => changeLanguage('en')}
//                   className={`${
//                     focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                   } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                 >
//                   English
//                 </button>
//               )}
//             </MenuItem>
//             <MenuItem>
//               {({ focus }) => (
//                 <button
//                   onClick={() => changeLanguage('ar')}
//                   className={`${
//                     focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                   } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                 >
//                   العربية
//                 </button>
//               )}
//             </MenuItem>
//           </div>
//         </MenuItems>
//       </Transition>
//     </Menu>
//   );
// }

// export default LanguageSwitcher;
// import { useEffect } from 'react';
// import { useTranslation } from 'next-i18next';
// import { Menu, MenuButton, Transition, MenuItems, MenuItem } from '@headlessui/react';
// import { Fragment } from 'react';

// function LanguageSwitcher() {
//   const {t, i18n } = useTranslation();

//   const changeLanguage = (lang) => {
//     console.log("lang ;;;;;;;;;;;;", lang)
//     i18n.changeLanguage(lang).then(() => {
//       console.log('Language changed to:', i18n.language);
//     });
//   };
//   useEffect(() => {
//     console.log('Current language:', i18n.language);
//     console.log('hero_title:', t('hero_title'));
//     console.log('hero_subtitle:', t('hero_subtitle'));
//     console.log('hero_description:', t('hero_description'));
//     console.log('start_learning:', t('start_learning'));
//   }, [i18n.language]);

//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           Language
//         </MenuButton>
//       </div>
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <MenuItem>
//               {({ focus }) => (
//                 <button
//                   onClick={() => changeLanguage('en')}
//                   className={`${
//                     focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                   } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                 >
//                   English
//                 </button>
//               )}
//             </MenuItem>
//             <MenuItem>
//               {({ focus }) => (
//                 <button
//                   onClick={() => changeLanguage('ar')}
//                   className={`${
//                     focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                   } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                 >
//                   العربية
//                 </button>
//               )}
//             </MenuItem>
//           </div>
//         </MenuItems>
//       </Transition>
//     </Menu>
//   );
// }

// export default LanguageSwitcher;


// import { useTranslation } from 'next-i18next';
// import { Menu, MenuButton, Transition, MenuItems, MenuItem } from '@headlessui/react';
// import { Fragment, useEffect } from 'react';

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lang) => {
//     console.log("lang ;;;;;;;;;;;;", lang);
//     i18n.changeLanguage(lang).then(() => {
//       console.log('Language changed to:', i18n.language);
//       console.log('Current language:', i18n.language);
//       console.log('hero_title:', i18n.t('hero_title'));
//       console.log('hero_subtitle:', i18n.t('hero_subtitle'));
//       console.log('hero_description:', i18n.t('hero_description'));
//       console.log('start_learning:', i18n.t('start_learning'));
//     }).catch((error) => {
//       console.error("Error changing language:", error);
//     });
//   };

//   useEffect(() => {
//     console.log('Initial language:', i18n.language);
//   }, [i18n.language]);

//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           Language
//         </MenuButton>
//       </div>
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <MenuItem>
//               {({ focus }) => (
//                 <button
//                   onClick={() => changeLanguage('en')}
//                   className={`${
//                     focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                   } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                 >
//                   English
//                 </button>
//               )}
//             </MenuItem>
//             <MenuItem>
//               {({ focus }) => (
//                 <button
//                   onClick={() => changeLanguage('ar')}
//                   className={`${
//                     focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                   } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                 >
//                   العربية
//                 </button>
//               )}
//             </MenuItem>
//           </div>
//         </MenuItems>
//       </Transition>
//     </Menu>
//   );
// }

// export default LanguageSwitcher;

// import { useTranslation } from 'next-i18next';
// import { Menu, MenuButton, Transition, MenuItems, MenuItem } from '@headlessui/react';
// import { Fragment, useEffect } from 'react';

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lang) => {
//     console.log("lang ;;;;;;;;;;;;", lang);
//     i18n.changeLanguage(lang).then(() => {
//       console.log('Language changed to:', i18n.language);
//       console.log('Current language:', i18n.language);
//       console.log('hero_title:', i18n.t('hero_title'));
//       console.log('hero_subtitle:', i18n.t('hero_subtitle'));
//       console.log('hero_description:', i18n.t('hero_description'));
//       console.log('start_learning:', i18n.t('start_learning'));
//     });
//   };

//   useEffect(() => {
//     console.log('Initial language:', i18n.language);
//   }, [i18n.language]);

//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           Language
//         </MenuButton>
//       </div>
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <MenuItem>
//               {({ focus }) => (
//                 <button
//                   onClick={() => changeLanguage('en')}
//                   className={`${
//                     focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                   } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                 >
//                   English
//                 </button>
//               )}
//             </MenuItem>
//             <MenuItem>
//               {({ focus }) => (
//                 <button
//                   onClick={() => changeLanguage('ar')}
//                   className={`${
//                     focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                   } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                 >
//                   العربية
//                 </button>
//               )}
//             </MenuItem>
//           </div>
//         </MenuItems>
//       </Transition>
//     </Menu>
//   );
// }

// export default LanguageSwitcher;

// import { useLanguage } from '../../context/LanguageContext';

// function LanguageSwitcher() {
//   const { toggleLanguage } = useLanguage();

//   return (
//     <button onClick={toggleLanguage} className="btn text-base ml-4">
//       {toggleLanguage === 'en' ? 'العربية' : 'English'}
//     </button>
//   );
// }

// export default LanguageSwitcher;
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function LanguageSwitcher() {
  const { locale, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="btn text-base ml-4">
      {locale === 'en' ? 'العربية' : 'English'}
    </button>
  );
}

export default LanguageSwitcher;
