/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "via.placeholder.com",
            "image.shutterstock.com",
            "cdn.sanity.io",
        ],
    },
    poweredByHeader: false,
    swcMinify: true,
    redirects: async () => {
        return [
            // {
            //     source: "/tickets",
            //     destination: "/events/sydney",
            //     permanent: false,
            // },
            {
                source: "/events/sydney",
                destination: "/events/sydney/2022",
                permanent: false,
            },
            {
                source: "/exhibitors",
                destination: "/events/sydney/2022?tab=exhibitors",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
