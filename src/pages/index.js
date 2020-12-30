import React from "react"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/Index/contact"
import '../style/main.scss'
import Hero from "../components/Index/Hero"
import Projects from "../components/Index/Projects"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
