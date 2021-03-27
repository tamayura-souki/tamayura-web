import React from "react"
import { Link } from "gatsby"

import GetDataJson from "../utils/getDataJson"
import Layout from "../components/layout/layout"

import "../styles/index.css"
import "../styles/link.css"

const LinkElement = props => {
  return (
    <Link to={props.linkPath} className="linkBox"  id={"link" + props.i}>
      <div className="linkCommon">
        <div className="name">{props.linkName}</div>
        <div className="description">~{props.linkDescription}~</div>
      </div>
    </Link>
  )
}

const IndexPage = () => {
  var linkList = GetDataJson("contentPageData")
  linkList = linkList.map((linkData, i) => (
    <LinkElement
      i={i}
      linkPath={linkData.path}
      linkName={linkData.name}
      linkDescription={linkData.description}
      key={"link" + i}
    />
  ))

  return (
    <Layout
      title="Home"
      topPoem="ここは入り口、出口はいつでも角に"
      bottomPoem="見つけてくれてありがとう"
    >
      <div id="entranceText">
        <h1>
          <p id="prefix">
          Programming <br/>
          Studying
          </p>
          <div id="postfix">
            <div id="bracket"> > </div>
            just for <div id="fun">fun</div>
          </div>
        </h1>
        <p>勉強を楽しく共有したい。情報系Vtuberの珠響そうきのwebサイトです。</p>
        <p>珠響そうきについての情報、各種取り揃えています。</p>
      </div>

      <div id="links">{linkList}</div>
    </Layout>
  )
}

export default IndexPage