// import Link from "next/link"
// import Carousel2 from "../home/carousel2"

// function Hero(){
//     return(
//         <div  className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
//             <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
//                 {/* <img src="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" /> */}
//                 <Carousel2 />
//                 <div>
//                 <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
//                     Master Programming   
//                 <span className="md:block mt-4">and Languages</span></h1>
//                 <p className="py-2 text-xl text-slate-100 mt-4 pr-12">
//                 Empower yourself with our innovative platform 
//                 <br />for mastering programming and languages.</p>
//                 <Link href="/start-designing"><button className="btn text-lg mt-16 px-12 btn-primary normal-case">
//                     Start Learning
//                     </button></Link>
//                 </div>
//             </div>
//         </div>
//     )    
// }

// export default Hero

// import Link from 'next/link';
// import { useTranslation } from 'next-i18next';
// import Carousel2 from "../home/carousel2"


// function Hero() {
//   const { t } = useTranslation('common');

//   return (
//     <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
//       <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
//         <Carousel2 />
//         <div>
//           <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
//             {t('hero_title')}
//             <span className="md:block mt-4">{t('hero_subtitle')}</span>
//           </h1>
//           <p className="py-2 text-xl text-slate-100 mt-4 pr-12">
//             {t('hero_description')}
//           </p>
//           <Link href="/start-designing">
//             <button className="btn text-lg mt-16 px-12 btn-primary normal-case">
//               {t('start_learning')}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// import Link from 'next/link';
// import { useTranslation } from 'next-i18next';
// import { useEffect } from 'react';
// import Carousel2 from "../home/carousel2";

// function Hero() {
//   const { t, i18n } = useTranslation('common');

//   useEffect(() => {
//     console.log('Current language:', i18n.language);
//     console.log('hero_title:', t('hero_title'));
//     console.log('hero_subtitle:', t('hero_subtitle'));
//     console.log('hero_description:', t('hero_description'));
//     console.log('start_learning:', t('start_learning'));
//   }, [i18n.language]);

//   return (
//     <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
//       <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
//         <Carousel2 />
//         <div>
//           <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
//             {t('hero_title')}
//             <span className="md:block mt-4">{t('hero_subtitle')}</span>
//           </h1>
//           <p className="py-2 text-xl text-slate-100 mt-4 pr-12">
//             {t('hero_description')}
//           </p>
//           <Link href="/start-designing">
//             <button className="btn text-lg mt-16 px-12 btn-primary normal-case">
//               {t('start_learning')}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;


// import { useTranslation } from 'next-i18next';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
import Carousel2 from '../home/carousel2';

// function Hero() {
//   const { t, i18n } = useTranslation('common');
//   const [language, setLanguage] = useState(i18n.language);

//   useEffect(() => {
//     const handleLanguageChange = () => {
//       setLanguage(i18n.language);
//       console.log("<<< >>>>",language)
//     };

//     i18n.on('languageChanged', handleLanguageChange);

//     return () => {
//       i18n.off('languageChanged', handleLanguageChange);
//     };
//   }, [i18n]);

//   useEffect(() => {
//     console.log('Current language:', i18n.language);
//     console.log('hero_title:', t('hero_title'));
//     console.log('hero_subtitle:', t('hero_subtitle'));
//     console.log('hero_description:', t('hero_description'));
//     console.log('start_learning:', t('start_learning'));
//   }, [i18n.language, t]);

//   return (
//     <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
//       <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
//         <Carousel2 />
//         <div>
//           <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
//             {t('hero_title')}
//             <span className="md:block mt-4">{t('hero_subtitle')}</span>
//           </h1>
//           <p className="py-2 text-xl text-slate-100 mt-4 pr-12">
//             {t('hero_description')}
//           </p>
//           <Link href="/start-designing">
//             <button className="btn text-lg mt-16 px-12 btn-primary normal-case">
//               {t('start_learning')}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// import { FormattedMessage } from 'react-intl';
// import Link from 'next/link';
// import { useLanguage } from '../../../context/LanguageContext';

// function Hero() {
//   const { locale } = useLanguage();

//   return (
//     <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
//       <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
//         {/* <img src="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" /> */}
//         <Carousel2 />
//         <div>
//           <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
//             <FormattedMessage id="hero.title" defaultMessage="Master Programming" />
//             <span className="md:block mt-4">
//               <FormattedMessage id="hero.subtitle" defaultMessage="and Languages" />
//             </span>
//           </h1>
//           <p className="py-2 text-xl text-slate-100 mt-4 pr-12">
//             <FormattedMessage
//               id="hero.description"
//               defaultMessage="Empower yourself with our innovative platform for mastering programming and languages."
//             />
//           </p>
//           <Link href="/start-designing">
//             <button className="btn text-lg mt-16 px-12 btn-primary normal-case">
//               <FormattedMessage id="hero.buttonText" defaultMessage="Start Learning" />
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

function Hero() {
  return (
    <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
      <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
        {/* Your carousel or image */}
        <Carousel2 />
        <Carousel2 />
        <div>
          <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
            <FormattedMessage id="hero.title" defaultMessage="Master Programming">
              {(text) => <>{text}</>}
            </FormattedMessage>{' '}
            <span className="md:block mt-4">
              <FormattedMessage id="hero.subtitle" defaultMessage="and Languages">
                {(text) => <>{text}</>}
              </FormattedMessage>
            </span>
          </h1>
          <p className="py-2 text-xl text-slate-100 mt-4 pr-12">
            <FormattedMessage
              id="hero.description"
              defaultMessage="Empower yourself with our innovative platform for mastering programming and languages."
            >
              {(text) => <>{text}</>}
            </FormattedMessage>
          </p>
          <Link href="/start-designing">
            <button className="btn text-lg mt-16 px-12 btn-primary normal-case">
              <FormattedMessage id="hero.buttonText" defaultMessage="Start Learning">
                {(text) => <>{text}</>}
              </FormattedMessage>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
