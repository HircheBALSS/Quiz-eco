/** @type {import('next').NextConfig} */
// import withPWA from 'next-pwa';

// const withPWA = require('next-pwa')({
//   dest: 'public'
// })

// const nextConfig = {}

// module.exports = withPWA(nextConfig);

import withPWA from 'next-pwa';

const nextConfig = {};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  ...nextConfig,
});