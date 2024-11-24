/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => [
        { source: "/@/:method*/:action*", destination: "http://localhost:3001/@/:method*/:action*" },
        { source: "/@/:method*", destination: "http://localhost:3001/@/:method*" }
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