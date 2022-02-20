module.exports = {
  siteMetadata: {
      title: `app`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: `/~metaverse`,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};