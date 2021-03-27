import React from "react"

import Layout from "../../components/layout/layout"
import GetDataJson from "../../utils/getDataJson"
import Image from "../../components/image"

import "../../styles/works.css"

const forImage = props => {
  var back = <Image filename={props.image}/>
  var front = (props.name) ? (<><h3>{props.name}</h3><p>{props.description}</p></>) : (<>{back}</>);
  return (
    <>
      <div className="backImage">{back}</div>
      <div className="imageFront">{front}</div>
    </>
  )
}

const notImage = props => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </>
  )
}

const worksList = (props, i) => {
  const worksItems = props.contents.map((data, i) => {
    var itemType = data.image ? "hasImage":"noImage"
    var item = data.image ? forImage(data) : notImage(data)

    if(data.link) {
      item = <>{item}<a href={data.link}><div className="hasLink">Link</div>{
        data.has_dist && <div className="hasDist">配布</div>
      }</a></>
    }

    return (
      <div className={itemType} key={"worksItem"+i}>
        {item}
      </div>
    )
  })

  return (
    <div className="worksList">
      <h1>{props.caption}</h1>
      <p>{props.detail}</p>
      <div className="items">{worksItems}</div>
    </div>
  );
}

const WorksPage = () => {
  const worksLists = GetDataJson("works").map((data, i) => (
    <div key={"worksList"+i}>{worksList(data, i)}</div>
  ))

  return (
    <Layout title="Works" topPoem="さくひん" bottomPoem="届くといいな">
      <div id="worksLists">{worksLists}</div>
    </Layout>
  )
}

export default WorksPage
