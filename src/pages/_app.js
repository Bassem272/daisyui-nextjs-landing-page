// // ./src/pages/_app.js
// import Layout from '@/containers/Layout'
// import '@/styles/globals.css'
// import { useEffect } from 'react'
// import { themeChange } from 'theme-change'
// import { Provider } from 'react-redux'
// import store from '../store'
// import { hotjar } from 'react-hotjar'
// import { GoogleAnalytics } from "nextjs-google-analytics"
// import mixpanel from 'mixpanel-browser';
// import { Crisp } from "crisp-sdk-web";
// import TagManager from 'react-gtm-module'
// import { appWithTranslation } from 'next-i18next';
// import LanguageSwitcher from '../components/LanguageSwitcher';
// import { LanguageProvider } from '../../context/LanguageContext';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react'
// import useTheme from '../hooks/useTheme';

//  function App({ Component, pageProps }) {
  
//     const [theme, setTheme] = useTheme();
//     useEffect(() => {
//         if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
          
//         }else{
//             console.log = () => {};
//             if(process.env.NEXT_PUBLIC_HOTJAR_ID)hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, 1)
//             if(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN)mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {debug: false}); 
//             if(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID)Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
//             if(process.env.NEXT_PUBLIC_GTM_ID)TagManager.initialize({gtmId: process.env.NEXT_PUBLIC_GTM_ID})
//         }
//       }, []);
//     //   const dispatch = useDispatch();
//     // useEffect(() => {
//     //     if (typeof window !== "undefined") {
//     //       const savedTheme = localStorage.getItem("theme") || "light";
//     //       document.documentElement.setAttribute("data-theme", savedTheme);
//     //       dispatch(setTheme(savedTheme));
    
//     //       const token = localStorage.getItem("token");
//     //       if (token) {
//     //         dispatch(setToken(token));
//     //         dispatch(setLoggedIn(true));
//     //       }
    
//     //       const userData = localStorage.getItem("user");
//     //       if (userData) {
//     //         const user = JSON.parse(userData);
//     //         dispatch(fetchUserDetail.fulfilled({ payload: user }));
//     //       }
//     //     }
//     //   }, [dispatch]);
//     // const [theme, setTheme] = useState('light'); // Initialize theme state with 'light'
//     // useEffect(() => {
//     //     const savedTheme = localStorage.getItem('theme') || 'light'; // Retrieve theme from localStorage
//     //     document.documentElement.setAttribute('data-theme', savedTheme);
//     //     setTheme(savedTheme); // Set theme state
//     //   }, []); // Run this effect only once on component mount
    

//   return (
//       <Provider store={store}>
//          <LanguageProvider>
//           <Layout>
//               <GoogleAnalytics trackPageViews />
             
//               <Component {...pageProps}  theme={theme} setTheme={setTheme} />
//           </Layout>
//           </LanguageProvider>
//       </Provider>
//   )
// }

// export default appWithTranslation(App);

// // src/pages/_app.js

// // import { useEffect } from 'react';
// // import { Provider } from 'react-redux';
// // import store from '../store'; // Adjust the path as needed
// // import Layout from '@/containers/Layout';
// // import '@/styles/globals.css';
// // import { hotjar } from 'react-hotjar';
// // import { GoogleAnalytics } from 'nextjs-google-analytics';
// // import mixpanel from 'mixpanel-browser';
// // import { Crisp } from 'crisp-sdk-web';
// // import TagManager from 'react-gtm-module';
// // import { appWithTranslation } from 'next-i18next';
// // import LanguageSwitcher from '../components/LanguageSwitcher';
// // import { LanguageProvider } from '../../context/LanguageContext';
// // import { useDispatch } from 'react-redux';
// // import { setTheme, setToken, setLoggedIn, fetchUserDetail } from '../store/userSlice';

// // function MyApp({ Component, pageProps }) {
// // //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
// //       // Development environment
// //     } else {
// //       console.log = () => {};
// //       if (process.env.NEXT_PUBLIC_HOTJAR_ID) hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, 1);
// //       if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, { debug: false });
// //       if (process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
// //       if (process.env.NEXT_PUBLIC_GTM_ID) TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
// //     }
// //   }, []);

// // //   useEffect(() => {
// // //     const savedTheme = localStorage.getItem('theme') || 'light';
// // //     document.documentElement.setAttribute('data-theme', savedTheme);
// // //     dispatch(setTheme(savedTheme));

// // //     const token = localStorage.getItem('token');
// // //     if (token) {
// // //       dispatch(setToken(token));
// // //       dispatch(setLoggedIn(true));
// // //     }

// // //     const userData = localStorage.getItem('user');
// // //     if (userData) {
// // //       const user = JSON.parse(userData);
// // //       dispatch(fetchUserDetail.fulfilled({ payload: user }));
// // //     }
// // //   }, [dispatch]);

// //   return (
// //     <Provider store={store}>
// //       <LanguageProvider>
// //         <Layout>
// //           <GoogleAnalytics trackPageViews />
// //           <LanguageSwitcher />
// //           <Component {...pageProps} />
// //         </Layout>
// //       </LanguageProvider>
// //     </Provider>
// //   );
// // }

// // export default appWithTranslation(MyApp);


// src/pages/_app.js
// import { useEffect, useState } from 'react';
// import { Provider } from 'react-redux';
// import store from '../store';
// import Layout from '@/containers/Layout';
// import '@/styles/globals.css';
// import { hotjar } from 'react-hotjar';
// import { GoogleAnalytics } from 'nextjs-google-analytics';
// import mixpanel from 'mixpanel-browser';
// import { Crisp } from 'crisp-sdk-web';
// import TagManager from 'react-gtm-module';
// import { appWithTranslation } from 'next-i18next';
// import { LanguageProvider } from '../../context/LanguageContext';

// function App({ Component, pageProps }) {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     document.documentElement.setAttribute('data-theme', savedTheme);
//     setTheme(savedTheme);

//     if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//       // Development environment
//     } else {
//       console.log = () => { };
//       if (process.env.NEXT_PUBLIC_HOTJAR_ID) hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, 1);
//       if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, { debug: false });
//       if (process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
//       if (process.env.NEXT_PUBLIC_GTM_ID) TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
//     }
//   }, []);

//   return (
//     <Provider store={store}>
//       <LanguageProvider>
//         <Layout>
//           <GoogleAnalytics trackPageViews />
//           <Component {...pageProps} theme={theme} setTheme={setTheme} />
//         </Layout>
//       </LanguageProvider>
//     </Provider>
//   );
// }

// export default appWithTranslation(App);
// src/pages/_app.js
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from '@/containers/Layout';
import '@/styles/globals.css';
import { hotjar } from 'react-hotjar';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import mixpanel from 'mixpanel-browser';
import { Crisp } from 'crisp-sdk-web';
import TagManager from 'react-gtm-module';
import { appWithTranslation } from 'next-i18next';
import { LanguageProvider } from '../../context/LanguageContext';
import Sidebar from '../components/sidebar'
function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
    setMounted(true);

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // Development environment
    } else {
      console.log = () => { };
      if (process.env.NEXT_PUBLIC_HOTJAR_ID) hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, 1);
      if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, { debug: false });
      if (process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
      if (process.env.NEXT_PUBLIC_GTM_ID) TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
    }
  }, []);

  if (!mounted) return null; // Only render the app when mounted on the client side

  return (
    <Provider store={store}>
      <LanguageProvider>
        <Layout>
        <Sidebar />
          <GoogleAnalytics trackPageViews />
          <Component {...pageProps} theme={theme} setTheme={setTheme} />
        </Layout>
      </LanguageProvider>
    </Provider>
  );
}

export default appWithTranslation(App);
