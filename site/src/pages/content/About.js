import React from "react"

import Layout from "../../components/layout/layout"
import GetDataJson from "../../utils/getDataJson"
import Image from "../../components/image"

import "../../styles/about.css"

const aboutTable = props => {
  const aboutRows = props.table.map((data, i) => (
    <tr className="aboutRow" key={"aboutRow" + i}>
      <td className="key">{data.key}</td>
      <td className="sep">:</td>
      <td>
        <div className="value">{data.value}</div>
        <div className="detail">{data.detail}</div>
      </td>
    </tr>
  ))

  return (
    <div className="aboutTable">
      <h2>{props.caption}</h2>
      <table>
        <tbody>{aboutRows}</tbody>
      </table>
    </div>
  )
}

const AboutPage = () => {
  const aboutTables = GetDataJson("about").map((data, i) => (
    <div key={"aboutTable" + i}>{aboutTable(data)}</div>
  ))

  return (
    <Layout title="About" topPoem="私のこと" bottomPoem="仲良くしてくださいね">
      <div id="charImage">
        <Image filename="standing1.png" />
      </div>
      <div id="aboutTables">{aboutTables}</div>
    </Layout>
  )
}

export default AboutPage
