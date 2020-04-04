import React from "react"
import { Link } from "gatsby"

import GetDataJson from "../utils/getDataJson"
import Layout from "../components/layout/layout"

import "../styles/index.css"
import "../styles/link.css"

const LinkElement = props => {
  return (
    <Link to={props.linkPath} className="linkCommon" id={"link" + props.i}>
      <div className="linkBox">
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
        <h1>ようこそ珠響そうきのwebサイトへ</h1>
        <p>情報系VTuber珠響そうきについての情報をまとめてあります。</p>
      </div>

      <div id="links">{linkList}</div>
    </Layout>
  )
}

export default IndexPage

// darker へのリンクだけどっかに隠しリンク作る
