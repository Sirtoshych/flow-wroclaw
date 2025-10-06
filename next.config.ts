const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: 'https://flow-wroclaw.vercel.app/',
  output: 'export',
  // distDir: '_next',
};

export default nextConfig;