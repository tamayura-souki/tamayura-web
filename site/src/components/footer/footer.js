import React from "react"

import "./footer.css"

const Footer = ({poem}) => {

  return (
    <footer>

      <div id="poem">
        {poem}
      </div>

      <div id = "copyright">
        © {new Date().getFullYear()} {` `}
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
