/** @type {import('next').NextConfig} */
import { withNextVideo } from "next-video/process";
const nextConfig = {
  images: {
    domains: ["www.ignant.com"],
  },
};
export default withNextVideo(nextConfig);
