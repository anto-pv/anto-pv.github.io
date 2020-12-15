import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <ul>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return(
            <li key={edge.node.slug}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })
        }
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
