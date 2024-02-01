/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/RJA",
  // assetPrefix: "/TJA/",
  // images: {
  //   domains: ["paperprisons.org"],
  //   path: "/TJA/_next/image",
  // },
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
