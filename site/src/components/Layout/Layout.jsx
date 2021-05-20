import * as React from "react"
import PropTypes from "prop-types"

import Seo from "../Seo/Seo"
import Header from "../Header/Header"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import Footer from "../Footer/Footer"

import "../../style/components/layout.scss"

const Layout = ({ title, topPoem, bottomPoem, children }) => (
  <div id="global" onTouchStart={null}>
    <Seo title={title} />
    <Header poem={topPoem} />
    <main>{children}</main>
    <ScrollToTop />
    <Footer poem={bottomPoem}/>
  </div>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  topPoem: PropTypes.string,
  bottomPoem: PropTypes.string,
}

export default Layout