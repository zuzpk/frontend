const API_URL = "http://localhost:3001/@/"
const fs = require('fs');

const buildConf = () => {

const [ m, mode ] = process.argv.find(v => v.indexOf('mode=') > -1).split("=")
const [ d, distDir, bistDir ] = process.argv.find(v => v.indexOf('dir=') > -1).split("=")

return `/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => [
        { source: "/@/:method*/:action*", destination: "${API_URL}:method*/:action*" },
        { source: "/@/:method*", destination: "${API_URL}:method*" }
    ],
    reactStrictMode: false,
    distDir: "${bistDir || distDir || `.next`}",
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
module.exports = nextConfig`;
}

fs.writeFileSync(
    `./next.config.js`,
    buildConf(),
    {
        encoding:'utf8',
        flag:'w'
    }
)