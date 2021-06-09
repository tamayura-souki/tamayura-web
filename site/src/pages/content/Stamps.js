import * as React from "react"

import Layout from "../../components/Layout/Layout"
import LinkButton from "../../components/LinkButton/LinkButton"
import Image from "../../components/Image/Image"
import StampsData from "../../content/stamps.json"
import "../../style/pages/content/stamps.scss"

const StampsPage = () => (
  <Layout title="Stamps" topPoem="SNS等で" bottomPoem="お好きにどうぞ">
    <p>Twitter などで雑に使ってやってください。</p>
    <p>あくまで、スタンプ用途にのみご使用ください。</p>
    <LinkButton to="https://tamayura-souki.booth.pm/items/2845876" text="Boothでも配布中"/>
    <div className="stamps-list">
      {
        StampsData.map((data, i)=>(
          <div className="stamps-item" key={"stamp"+i}>
            <Image filename={data.path}/>
          </div>
        ))
      }
    </div>
  </Layout>
)

export default StampsPage