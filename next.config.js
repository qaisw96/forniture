/** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');
// const withTM = require('next-transpile-modules')(['some-module', 'and-another']);
//
// require("next-transpile-modules")(["mojave"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com', 'websitedemos.net']
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  }
}

module.exports = nextConfig
