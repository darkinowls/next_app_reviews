
CMS_URL = new URL(process.env.CMS_DOMAIN)

/**
 * @type {import('next').NextConfig}
 */
module.exports = {

    // output: "export",
    images: {
        // unoptimized: true,
        remotePatterns: [
            {
                port: CMS_URL.port,
                hostname: CMS_URL.hostname,
                pathname: "/uploads/**",
            }
        ]
    }
}

