import { Link } from "gatsby"
import React from "react"

import "./footer.css"

const LinkList = prop => {

}

const Footer = ({poem}) => {

  return (
    <footer>

      <div id="poem">
        {poem}
      </div>

      <div id="links">
      </div>

      <div id = "copyright">
        © {new Date().getFullYear()} tamayura-souki, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
