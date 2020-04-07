import React from "react"

import Layout from "../../components/layout/layout"
import GetDataJson from "../../utils/getDataJson"
import Image from "../../components/image"

import "../../styles/works.css"

const worksList = props => {
  const worksItems = props.contents.map((data, i) => {
    var back = (data.image) ? (<Image filename={data.image}/>)
                            : (<><h2>{data.name}</h2><p>{data.description}</p></>);

    var float = (data.name) ? (<><h2>{data.name}</h2><p>{data.description}</p></>)
                            : (<>{back}</>);

    back = (
      <div className="worksBack">{back}</div>
    )

    float = (
      <div className="worksFloat">{float}</div>
    )

    var item = (
      <>
        {back}
        {float}
      </>
    )

    if(data.link) {
      item = (<a href={data.link}>{item}</a>)
    }

    return (
      <div className="worksItem" key={"worksItem"+i}>
        {item}
      </div>
    )
  })

  return (
    <div className="worksList">
      <h1>{props.caption}</h1>
      <p>{props.detail}</p>
      {worksItems}
    </div>
  );
}

const WorksPage = () => {
  const worksLists = GetDataJson("works").map((data, i) => (
    <div key={"worksList"+i}>{worksList(data)}</div>
  ))

  return (
    <Layout title="Works" topPoem="さくひん" bottomPoem="届くといいな">
      <div id="worksLists">{worksLists}</div>
    </Layout>
  )
}

export default WorksPage
