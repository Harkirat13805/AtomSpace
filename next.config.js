// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your Next.js configuration options here if needed
}

module.exports = {
  ...nextConfig, // Spread the nextConfig object to include its properties
  images: {
    unoptimized: true // Disable Image Optimization API
  }
}
