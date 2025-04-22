require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    siteTitle: `Faiz Ahmed Farooqui`,
    siteTitleAlt: `Faiz Ahmed Farooqui`,
    siteHeadline: `Faiz Ahmed Farooqui`,
    siteUrl: `https://faizahmed.in`,
    siteDescription: `Software Engineer from Bengaluru, India.`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@faizahmedfarooqui`
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'G-ZJ0P98JRXH',
        includeInDevelopment: true,
        defaultDataLayer: {
          platform: 'gatsby',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Faiz Ahmed Farooqui`,
        short_name: `Faiz`,
        description: `Tech Lead (Backend) from Bengaluru, Karnataka, India.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            "src": "/android-icon-36x36.png",
            "sizes": "36x36",
            "type": "image/png",
            // "density": "0.75"
          },
          {
            "src": "/android-icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            // "density": "1.0"
          },
          {
            "src": "/android-icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            // "density": "1.5"
          },
          {
            "src": "/android-icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            // "density": "2.0"
          },
          {
            "src": "/android-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            // "density": "3.0"
          },
          {
            "src": "/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            // "density": "4.0"
          }
        ],
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
