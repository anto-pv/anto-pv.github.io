import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
export const query = graphql`
    query ($slug: String!){
        contentfulBlogPost(slug: {eq:$slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            keys
            image {
                id
                file {
                  url
                }
                description
            }
            body {
                json
                }
        }
    }
`
const Blogtemp = (props) =>{
    const blogimage = (image) => {
        if(image !== null){
            return(<div>
            <img src={image.file.url} alt={image.description}></img>
        </div>);}
    }
    return(
    <Layout>
        <SEO title="Blogs" />
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}
        </p>
        {props.data.contentfulBlogPost.keys}
        {blogimage(props.data.contentfulBlogPost.image)}
        {props.data.contentfulBlogPost.body.json.content[0].content[0].value}
    </Layout>
    )
    }

export default Blogtemp