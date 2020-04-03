/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes, { func } from "prop-types"
import SEO from "../seo"

import Header from "../header/header"
import Footer from "../footer/footer"
import GoTopButton from "../goTop/goTop"
import "./layout.css"

const Layout = ({title, topPoem, bottomPoem, children }) => {
  return (
    <div id="global" onTouchStart={null}>
      <SEO title={title} />
      <Header poem={topPoem} />
      <main>{children}</main>
      <GoTopButton />
      <Footer poem={bottomPoem}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
