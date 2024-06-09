/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['localhost', 'citas-66dd7.firebaseapp.com'],
    },
};


export default nextConfig;
