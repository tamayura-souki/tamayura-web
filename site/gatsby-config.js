module.exports = {
  siteMetadata: {
    title: `tamayura web`,
    description: `珠響そうきの公式サイトです。`,
    author: `@tamayurasouki`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
