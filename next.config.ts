const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  // assetPrefix: isProd ? '/flow-wroclaw.gihtub.io/' : '',
  // basePath: isProd ? '/flow-wroclaw.gihtub.io' : '',
  output: 'export',
  // distDir: '_next',
};

export default nextConfig;