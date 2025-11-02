import {withSentryConfig} from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "alifa-development.s3.ap-southeast-1.amazonaws.com",
      "lh3.googleusercontent.com",
      "static.vecteezy.com",
      "platform-lookaside.fbsbx.com",
      "images.app.goo.gl",
      "img.youtube.com",
      "international-school-in-china-information-hub.ghost.io",
      "static.ghost.org",
      "yt3.ggpht.com",
      "alifa-production.s3.ap-southeast-1.amazonaws.com",
      "alifaedtech.com",
      "blog.alifaedtech.com"
    ],
  },

  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  swcMinify: true,
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "ranks-agami-new",

  project: "alifa-2",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});