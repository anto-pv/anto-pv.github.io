import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaRegHeart } from 'react-icons/fa';
import Header from "./header"
import "./layout.module.scss"
/*react icons link https://react-icons.github.io/react-icons
for bootstrap go for react-bootstrap documentation*/
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header title={children[0].props.title} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <main>{children}</main>
        <footer className="footer">
         Built with
          {` `}
          <FaRegHeart /> © 2020
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
