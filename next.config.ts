import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    clientInstrumentationHook: true,  // 起動時にDIコンテナを初期化するため
  }
};

export default nextConfig;
