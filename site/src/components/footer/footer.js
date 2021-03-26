import { Link } from "gatsby"
import React from "react"

import "./footer.css"

const Footer = ({poem}) => {

  return (
    <footer>

      <div id="poem">
        <Link to="/Dark">
          {poem}
        </Link>
      </div>

      <div id = "copyright">
        © 2020 {` `}
        <a href="https://twitter.com/tamayurasouki">tamayura-souki</a>, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>,
        {` `}
        <a href="https://github.com/tamayura-souki/tamayura-web">GitHub</a>
      </div>
    </footer>
  )
}

export default Footer
