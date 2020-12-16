const path = require('path')
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templetes/blog.js')
    const res = await graphql(`
        query MyQuery {
            allContentfulBlogPost {
            edges {
                node {
                slug
                }
            }
            }
        }
    `)
    res.data.allContentfulBlogPost.edges.forEach((edge)=>{
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}