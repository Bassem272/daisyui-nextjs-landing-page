import Image from 'next/image'
import { Inter } from "next/font/google"
import styles from '@/styles/Home.module.css'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import GenerationStep from '@/components/home/GenerationStep'
import FeatureSection from '@/components/home/FeatureSection'
import PageMetaTags from '@/containers/PageMetaTags'
import Pricing from '@/components/home/Pricing'
import CTA2 from '@/components/home/CTA2'
import Carousels from '@/components/home/carousels'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageMetaTags title="Home" description={""} url=""/>
    <div itemScope itemType="https://schema.org/WebSite">
      <meta itemProp="url" content="https://www.webdesignai.com/"/>
      <meta itemProp="name" content="Web Design AI"/>
    </div>
        <Hero />
        <Carousels />
        <GenerationStep />
        <FeatureSection showHeading={true} title="Feature title 1"/>

        <FeatureSection title="Featuer title 2" leftText="1" />

        <FeatureSection title="Feature title 3"/>

        <Testimonials />
        <Pricing />
        <CTA2 />
    </>
  )
}


// pages/index.js
// import Hero from '@/components/home/Hero';
// import Carousels from '@/components/home/carousels';
// import GenerationStep from '@/components/home/GenerationStep';
// import FeatureSection from '@/components/home/FeatureSection';
// import Testimonials from '@/components/home/Testimonials';
// import Pricing from '@/components/home/Pricing';
// import CTA2 from '@/components/home/CTA2';
// import PageMetaTags from '@/containers/PageMetaTags';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
// import LanguageSwitcher from '@/components/LanguageSwitcher';

// // export async function getStaticProps({ locale }) {
// //   return {
// //     props: {
// //       ...(await serverSideTranslations(locale, ['common'])),
// //     },
// //   };
// // }

// export default function Home() {
//   // const { t } = useTranslation('common');

//   return (
//     <>
//       <PageMetaTags title={t('home_title')} description={t('home_description')} url="https://www.webdesignai.com/" />
//       <div itemScope itemType="https://schema.org/WebSite">
//         <meta itemProp="url" content="https://www.webdesignai.com/" />
//         <meta itemProp="name" content="Web Design AI" />
//       </div>
//       {/* <LanguageSwitcher /> */}
//       <Hero />
//       <Carousels />
//       <GenerationStep />
//       <FeatureSection showHeading={true} title={t('feature_title_1')} />

//       <FeatureSection title={t('feature_title_2')} leftText="1" />

//       <FeatureSection title={t('feature_title_3')} />

//       <Testimonials />
//       <Pricing />
//       <CTA2 />
//     </>
//   );
// }
