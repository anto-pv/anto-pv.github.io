import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from "../components/layout"
import SEO from "../components/seo"
export const query = graphql`
    query ($slug: String!){
        contentfulBlogPost(slug: {eq:$slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
            keys
        }
    }
`
const Blogtemp = (props) =>{
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title[`en-US`]
                const url = node.data.target.fields.file[`en-US`].url
                const link = node.data.target.fields.description[`en-US`]
                return <Link to={link}><img alt={alt} src={url} /></Link>
            }
        }
    }
    return(
    <Layout>
        <SEO title="Blogs" />
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}
        </p>
        {props.data.contentfulBlogPost.keys}
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        <Link to="/contact">Detail</Link>
    </Layout>
    )
    }

export default Blogtemp