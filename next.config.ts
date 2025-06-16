import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
    experimental: {
        optimizePackageImports: ['ahooks'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true
            },
        ]
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
