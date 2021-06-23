require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    siteTitle: `Faiz A. Farooqui`,
    siteTitleAlt: `Faiz A. Farooqui`,
    siteHeadline: `Faiz A. Farooqui`,
    siteUrl: `https://faizahmed.in`,
    siteDescription: `Expert in Backend & Server Side Management.`,
    siteLanguage: `en`,
    siteImage: `/`,
    author: `@_faizahmed`,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {
        initialColorModeName: `dark`
      },
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Faiz A. Farooqui`,
        short_name: `Faiz`,
        description: `Expert in Backend & Server Side Management.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
