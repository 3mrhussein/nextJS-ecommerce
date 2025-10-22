import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    // optional: define custom aliases for SCSS
    alias: {
      '@': path.resolve(__dirname),
    },
  },
};

export default withNextIntl(nextConfig);
