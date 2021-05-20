import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../../style/components/footer.scss"

const Footer = ({ poem }) => (
  <footer>
    <div className="poem">
      <Link to="/Dark">
        {poem}
      </Link>
    </div>

    <div className="copyright">
      © 2020 {` `}
      <a href="https://twitter.com/tamayurasouki">tamayura-souki</a>, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>,
      {` `}
      <a href="https://github.com/tamayura-souki/tamayura-web">GitHub</a>
    </div>
  </footer>
)

Footer.propTypes = {
  poem: PropTypes.string,
}

Footer.defaultProps = {
  poem: `──`,
}

export default Footer
