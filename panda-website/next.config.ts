import type { NextConfig } from "next";

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

export default nextConfig;
