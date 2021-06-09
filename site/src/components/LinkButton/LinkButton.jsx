import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../../style/components/linkbutton.scss"

const LinkButton = ({to, text}) => (
  <div className="link-button">
    <Link to={to}>
      <div className="bracket-l">{`<`}</div>
      <div className="text">{text}</div>
      <div className="bracket-r">{`>`}</div>
    </Link>
  </div>
)
LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default LinkButton