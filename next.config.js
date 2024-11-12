/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => [
        { source: "/@/:method*/:action*", destination: "http://cms.zuz.com.pk/@/:method*/:action*" },
        { source: "/@/:method*", destination: "http://cms.zuz.com.pk/@/:method*" }
    ],
    reactStrictMode: false,
    distDir: ".next.dev",
    cleanDistDir: true,
    poweredByHeader: false,
    images: {
        loader: 'custom',
        loaderFile: './imgloader.js',
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*"
            }
        ]
    },
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    }
}
module.exports = nextConfig