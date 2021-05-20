import * as React from "react"
import PropTypes from "prop-types"

import Layout from "../../components/Layout/Layout"
import Image from "../../components/Image/Image"
import WorksData from "../../content/works.json"

import "../../style/pages/content/works.scss"

const ImageItem = ({ name, description, image }) => {
  const back = <Image filename={image}/>
  const front = (name) ? (<NoImageItem name={name} description={description}/>): (back);
  return (
    <>
      <div className="back-image">{back}</div>
      <div className="image-front">{front}</div>
    </>
  )
}
ImageItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

const NoImageItem = ({ name, description }) => (
  <><h3>{name}</h3><p>{description}</p></>
)
NoImageItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const LinkBadge = ({ link, has_dist }) => (
  <a href={link}>
    <div className="link-badge">Link</div>
    { has_dist && <div className="dist-badge">配布</div> }
  </a>
)
LinkBadge.propTypes = {
  link: PropTypes.string.isRequired,
  has_dist: PropTypes.bool,
}

const WorksList = ({ caption, detail, contents }) => {
  const worksItems = contents.map((data, i) => {
    const itemClass = data.image ? "image-item": "noimage-item"
    const item = data.image
      ? <ImageItem name={data.name} description={data.description} image={data.image}/>
      : <NoImageItem name={data.name} description={data.description}/>
    return (
      <div className={itemClass} key={"works-item"+i}>
        {item}
        {data.link && <LinkBadge link={data.link} has_dist={data.has_dist}/>}
      </div>
    )
  })
  return(
    <div className="work-list">
      <h1>{caption}</h1>
      <p>{detail}</p>
      <div className="items">{worksItems}</div>
    </div>
  )
}
WorksList.propTypes = {
  caption: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    has_dist: PropTypes.bool,
  })).isRequired,
}

const WorksPage = () => (
  <Layout title="Works" topPoem="さくひん" bottomPoem="届くといいな">
    <div className="works-lists">{
      WorksData.map((data, i) => (
        <WorksList
          key={"work-list"+i}
          caption={data.caption}
          detail={data.detail}
          contents={data.contents}
        />
      ))
    }</div>
  </Layout>
)

export default WorksPage