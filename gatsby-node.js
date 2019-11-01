const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      discoveries: allContentfulMwDiscoveries {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.discoveries.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/discovery-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
