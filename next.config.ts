import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline'  https://api-maps.yandex.ru https://yastatic.net;
    script-src-elem 'self' 'unsafe-inline' https://api-maps.yandex.ru https://yastatic.net;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://api-maps.yandex.ru https://yastatic.net;
    font-src 'self' https://mc.yandex.ru https://yastatic.net;
    frame-src 'self' https://yandex.ru;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};
