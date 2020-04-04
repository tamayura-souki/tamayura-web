module.exports = {
  siteMetadata: {
    title: `tamayura web`,
    description: `珠響そうきの公式サイトです。`,
    author: `@tamayurasouki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tamayura-web`,
        short_name: `tamayura`,
        start_url: `/`,
        background_color: `whitesmoke`,
        theme_color: `#2010f8`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        lang: `ja`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Serif JP`,
          },
          {
            family: `Noto Sans JP`,
          }
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
