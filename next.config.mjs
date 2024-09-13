/** @type {import('next').NextConfig} */
import { withNextVideo } from "next-video/process";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ignant.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      }
    ],
  },
};
export default withNextVideo(nextConfig);
