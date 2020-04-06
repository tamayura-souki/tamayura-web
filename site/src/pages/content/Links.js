import React from "react"

import Layout from "../../components/layout/layout"
import GetDataJson from "../../utils/getDataJson"

import "../../styles/links.css"

const linkList = props => {
  const linkItems = props.linkList.map((data, i) => (
    <div className="linksBox" key={"linkList" + i}>
      <div className="linkItem">
        <a href={data.link}>
            <div className="name">{data.name}</div>
            <div className="detail">~{data.detail}~</div>
        </a>
      </div>
    </div>
  ));

  return (
    <div className="linkList">
      <h2>{props.caption}</h2>
      <p>{props.description}</p>
      {linkItems}
    </div>
  )
}

const LinksPage = () => {
  const linkLists = GetDataJson("links").map((data, i) => (
    <div key={"linkLists" + i}>{linkList(data)}</div>
  ))

  return (
    <Layout title="Links" topPoem="私というつながり" bottomPoem="旅のはじまり">
      <div id="linksPage">
        {linkLists}
      </div>
    </Layout>
  )
}

export default LinksPage