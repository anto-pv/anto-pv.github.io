import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./Index/Footer";
/*react icons link https://react-icons.github.io/react-icons
for bootstrap go for react-bootstrap documentation*/
const Layout = ({ children }) => {
  return (
    <>
      <Header title={children[0].props.title} />
        <main>{children}</main>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
