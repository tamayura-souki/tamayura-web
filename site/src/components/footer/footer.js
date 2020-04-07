import React from "react"

import "./footer.css"

const Footer = ({poem}) => {

  return (
    <footer>

      <div id="poem">
        {poem}
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
