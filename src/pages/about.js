import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>I am a Developer studying in Mar Athansius College of Engineering, Kothamangalam.
      Address
    </p>
    <Link to="/contact">Detail</Link>
  </Layout>
)

export default AboutPage
