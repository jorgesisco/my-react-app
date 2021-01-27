module.exports = {
  siteMetadata: {
    title: 'React Website built by Sisco',
    description: 'Using the latest technologies for better performance',
    keywords: 'react app, wordpress react app, shopify react app ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'aad2bz2u8yic',
        accessToken: 'o74oLvf7huk3sMQPGeGyD7T73BcUBwG33AeTSw4aD5g',
      },
    },
  ],
}
