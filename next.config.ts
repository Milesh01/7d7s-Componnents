import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['framerusercontent.com', 'images.unsplash.com', 'plus.unsplash.com', 'img.freepik.com'],
  },
  reactStrictMode: true, // Recommended for better development practices

};

export default nextConfig;
