import * as React from "react"
import PropTypes from "prop-types"

import Layout from "../../components/Layout/Layout"
import LinksData from "../../content/links.json"
import "../../style/pages/content/links.scss"

const LinkItem = ({ name, detail, link }) => (
  <div className="link-item">
    <a href={link}>
      <div className="name">{name}</div>
      <div className="detail">~{detail}~</div>
    </a>
  </div>
)
LinkItem.propTypes = {
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

const LinkList = ({ caption, description, linkList }) => (
  <div className="link-list">
    <h2>{caption}</h2>
    <p>{description}</p>
    {
      linkList.map((data, i) => (
        <div className="link-box" key={"link-box"+i}>
          <LinkItem name={data.name} detail={data.detail} link={data.link}/>
        </div>
      ))
    }
  </div>
)
LinkList.propTypes = {
  caption: PropTypes.string,
  description: PropTypes.string,
  linkList: PropTypes.arrayOf(PropTypes.exact(LinkItem.propTypes)).isRequired,
}

const LinksPage = () => (
  <Layout title="Links" topPoem="私というつながり" bottomPoem="旅のはじまり">
    <div className="links-page">
      {
        LinksData.map((data, i) => (
          <div key={"link-lists"+i}>
            <LinkList
              caption={data.caption} description={data.description}
              linkList={data.linkList}
            />
          </div>
        ))
      }
    </div>
  </Layout>
)

export default LinksPage