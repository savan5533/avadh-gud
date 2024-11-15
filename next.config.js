// next.config.js
const nextConfig = {
    output: 'export', // Ensures the app is exported as a static site
    images: {
      unoptimized: true, // Disables image optimization for static exports
    },
  };
  
  module.exports = nextConfig;
  