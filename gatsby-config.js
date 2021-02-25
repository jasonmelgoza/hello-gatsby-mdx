module.exports = {
  siteMetadata: {
    title: `MDX 🙌`,
    description: `Kick off your next, great Gatsby project with MDX.`,
    author: `@jasonmelgoza`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
}
