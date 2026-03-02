import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eliminar o comentar output: "export"
  // output: "export",

  // si quieres bundle para despliegue en contenedor:
  output: "standalone",

  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
};

export default nextConfig;