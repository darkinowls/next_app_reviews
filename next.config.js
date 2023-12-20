/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    // output: "export",
    images: {
        // unoptimized: true,
        remotePatterns:[
            {
                port: "1337",
                hostname: 'localhost',
                pathname: "/uploads/**",
            }
        ]
    }
}

