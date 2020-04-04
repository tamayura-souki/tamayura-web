import React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"
import Image from "../image"
import GetDataJson from "../../utils/getDataJson"

import "./header.css"

const Header = ({ poem }) => {
  var links = GetDataJson("contentPageData")
  links = links.map(linkData => (
    <Link className="header-link" to={linkData.path} key={linkData.path}>
      {linkData.name}
    </Link>
  ))

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div id="header-logo">
        <Link to="/">
          <Image filename="logo.png" />
        </Link>
      </div>

      <div className="header-links">
        <Link className="header-link" to="/">
          Home
        </Link>
        {links}
      </div>

      <div id="poem">{poem}</div>
    </header>
  )
}

Header.propTypes = {
  poem: PropTypes.string,
}

Header.defaultProps = {
  poem: ``,
}

export default Header
