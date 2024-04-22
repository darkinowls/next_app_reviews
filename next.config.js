
CMS_URL = new URL(process.env.CMS_DOMAIN)

/**
 * @type {import('next').NextConfig}
 */
module.exports = {

    // output: "standalone",
    // output: "export",
    images: {
        // unoptimized: true,
        remotePatterns: [
            {
                hostname: CMS_URL.hostname,
                pathname: "/uploads/**",
            }
        ]
    }
}

