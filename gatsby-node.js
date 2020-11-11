const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const productTemplate = path.resolve('src/templates/product.js')
        console.log(process.env.LOCALE)
        const locale = process.env.LOCALE
        resolve(
            graphql(`
            {
                allContentfulProduct {
                    nodes {
                      childContentfulProductProductDescriptionTextNode {
                        productDescription
                      }
                      childContentfulProductProductNameTextNode {
                        productName
                      }
                      image {
                        file {
                          url
                        }
                      }
                      slug
                    }
                  }
            }
          `).then((result) => {
              console.log(result);
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulProduct.nodes.forEach((node) => {
                    console.log(node)
                    createPage({
                        path: 'product/'+node.slug,
                        component: productTemplate,
                        context: {
                            productName: node.childContentfulProductProductNameTextNode.productName,
                            productDescription: node.childContentfulProductProductDescriptionTextNode.productDescription,
                            image: node.image[0].file.url
                        }
                    })
                })
                return
            })
        )
    })
}