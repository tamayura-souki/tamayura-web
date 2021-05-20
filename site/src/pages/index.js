import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import ContentPageData from "../content/content.json"

import "../style/pages/index.scss"

const LinkElement = ({ link, name, description }) => (
  <Link to={link} className="link-hitbox">
    <div className="link-view">
      <div className="name">{name}</div>
      <div className="description">~{description}~</div>
    </div>
  </Link>
)

LinkElement.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const IndexPage = () => (
  <Layout
    title="Home"
    topPoem="ここは入り口、出口はいつでも角に"
    bottomPoem="見つけてくれてありがとう"
  >
    <div className="entrance-text">
      <h1>
        <p className="prefix">
        Programming <br/>
        Studying
        </p>
        <div className="postfix">
          <div className="bracket"> {">"} </div>
          just for <div className="fun">fun</div>
        </div>
      </h1>
      <p>勉強を楽しく共有したい。情報系Vtuberの珠響そうきのwebサイトです。</p>
      <p>珠響そうきについての情報、各種取り揃えています。</p>
    </div>

    <div className="links">
      {
        ContentPageData.map((pageData, i) => (
          <LinkElement
            name={pageData.name}
            link={pageData.path}
            description={pageData.description}
            key={"link" + i}
          />
        ))
      }
    </div>
  </Layout>
)

export default IndexPage