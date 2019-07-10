module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-firestore`,
      options: {
        credential: require("./firebase-key.json"),
        databaseURL: "https://fitness-d1885.firebaseio.com",
        appConfig:{
          apiKey: "AIzaSyDnm8nx395BN1djYb3siKsbYRhWYpPuPLg",
          authDomain: "fitness-d1885.firebaseapp.com",
          databaseURL: "https://fitness-d1885.firebaseio.com",
          projectId: "fitness-d1885",
          storageBucket: "fitness-d1885.appspot.com",
          messagingSenderId: "979021498850",
          appId: "1:979021498850:web:712de4c4184e85e8"
        },
        types: [{
          type: `Exercises`,
          collection: `exercises`,
          map: doc => ({
            title: doc.title,
            description: doc.description,
            image: doc.image
          })
        }]
      }
    }
  ],
}
