import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import ContentPageData from "../../content/content.json"

import "../../style/components/header.scss"

const Header = ({ poem }) => (
  <header>
    <div className="logo">
      <Link to="/">
        <StaticImage src="../../images/logo.png" alt="logo"/>
      </Link>
    </div>

    <div className="navbar">
      <Link className="nav-link" to="/">
        Home
      </Link>
      {
        ContentPageData.map(pageData => (
          <Link className="nav-link" to={pageData.path} key={pageData.path}>
            {pageData.name}
          </Link>
        ))
      }
    </div>

    <div className="poem">{poem}</div>
  </header>
)

Header.propTypes = {
  poem: PropTypes.string,
}

Header.defaultProps = {
  poem: `──`,
}

export default Header
