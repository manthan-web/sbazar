/** @type {import('next').NextConfig} */
import { withNextVideo } from "next-video/process";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ignant.com',
      },
    ],
  },
};
export default withNextVideo(nextConfig);
