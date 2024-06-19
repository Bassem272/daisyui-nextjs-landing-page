// next.config.js
// const { i18n } = require('./next-i18next.config');
// /** @type {import('next').NextConfig} */
// const withImages = require('next-images');

// module.exports = {
//   reactStrictMode: false,
//   i18n,
//   transpileModules: ['react-hotjar'],
//   // Add configuration for next-images plugin
//   ...withImages(),
// };

// // module.exports = nextConfig;


const { i18n } = require('./next-i18next.config');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['react-hotjar']); // Use next-transpile-modules for transpiling
// const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  en: 'en',
  ar: 'ar',
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
  // publicRuntimeConfig: {
  //   localeSubpaths,
  // },
  reactStrictMode: false,
  i18n,
};

module.exports = withImages(withTM(nextConfig));
