import React from "react"

import Layout from "../../components/layout/layout"
import GetDataJson from "../../utils/getDataJson"
import Image from "../../components/image"

import "../../styles/stamps.css"

const stampsList = props => {
  return (
    <div>
      <Image filename={props.path}/>
    </div>
  );
}

const WorksPage = () => {
  const stampsLists = GetDataJson("stamps").map((data, i) => (
    <div className="stampsItem" key={"stamp"+i}>{stampsList(data)}</div>
  ))

  return (
    <Layout title="Stamps" topPoem="SNS等で" bottomPoem="お好きにどうぞ">
      <p>Twitter などで雑に使ってやってください。</p>
      <p>あくまで、スタンプ用途にのみご使用ください。</p>
      <p><a href="https://tamayura-souki.booth.pm/items/2845876">Boothでも配布中</a></p>
      <div id="stampslist">{stampsLists}</div>
    </Layout>
  )
}

export default WorksPage