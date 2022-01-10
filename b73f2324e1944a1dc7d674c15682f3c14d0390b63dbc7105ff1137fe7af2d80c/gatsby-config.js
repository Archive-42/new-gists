plugins: [
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      precachePages: [`/about-us/`, `/projects/*`],
    },
  },
  ]
