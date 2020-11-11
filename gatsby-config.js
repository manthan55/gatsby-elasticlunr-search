/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e0g77ugd5ejc`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'vlPI_K2bueVw-Kgj0P4oUvlxqC-RCghIeXgXlL9jFAM',
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`name`, `description`, `path`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          
          ContentfulProduct: {
            name: (node, getNode) => {
              const productNameNode = getNode(node.productName___NODE);
              return productNameNode.productName;
            },
            description: (node, getNode) => {
              const productDescriptionNode = getNode(node.productDescription___NODE);
              return productDescriptionNode.productDescription;
            },
            path: node => node.slug
        },
        },
          // // Optional filter to limit indexed nodes
          // filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
  ],
}
