import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people, I am Anto</h1>
    <p>Site is in test mode.Will be published soon</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about">About</Link>
    <a href="https://drive.google.com/file/d/1fgS_6lB37oURBIrbykQQrAOrzAohUpnb/view?usp=sharing">Resume</a> <br />
    <Contact />
  </Layout>
)

export default IndexPage
