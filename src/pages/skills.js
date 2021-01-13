import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSkill {
        edges{
          node {
            skillimage {
              file {
                url
              }
              title
            }
            tag
            projectLinkes
          }
        }
      }
    }
  `)
  return(
  <Layout>
    <SEO title="Skills" />
    <section id="Skills">
    <Row key="Skills">
      {data.allContentfulSkill.edges.map((edge)=>{
        return(
          <Col lg={4} sm={12}>
            <img className="img" src={edge.node.skillimage.file.url} alt={edge.node.skillimage.title}></img>
          </Col>
        )
      })}</Row>
    </section>
  </Layout>
  )}

export default PortfolioPage
