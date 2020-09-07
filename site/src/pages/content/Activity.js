import React from "react"

import Layout from "../../components/layout/layout"
import GetDataJson from "../../utils/getDataJson"
import Image from "../../components/image"

import "../../styles/activity.css"

const activityCard = props => {
  let item = (
    <>
      <Image filename={props.image} className="activityImage"/>
      <h1 className="activityTitle">{props.title}</h1>
      <p className="activityP">{props.description}</p>
    </>
  )

  if(props.link){
    item = (<a href={props.link}>{item}</a>)
  }

  return(
    <div className="activityCard">
      {item}
    </div>
  )
}

const ActivityPage = () => {
  const activityCards = GetDataJson("activity").map((data, i) => (
    <div key={"activityCard"+i}>{activityCard(data)}</div>
  ))

  return (
    <Layout title="Activity" topPoem="やってきたこと" bottomPoem="見ててね">
      <div className="activityCaption">
        <h1>情報系VTuber珠響そうきの活動記録</h1>
        <p>みんなが楽しめる技術系配信を目指しています。</p>
      </div>
      <div id="activityCards">{activityCards}</div>
    </Layout>
  )
}

export default ActivityPage