import React from "react"

import Layout from "../../components/layout/layout"
import GetDataJson from "../../utils/getDataJson"

import "../../styles/history.css"

const historyRow = (props, i) => {
  var date = props.date
  if (props.date2) date = (<>{date} ~ <br/> {props.date2} </>)

  return (
    <tr className="historyRow" key={"historyRow" + i}>
      <td className="date">{date}</td>
      <td>
        <a href={props.link}>
          <div className="text">{props.text}</div>
          <div className="detail">{props.detail}</div>
        </a>
      </td>
    </tr>
  )
}

const HistoryPage = () => {
  const historyTable = GetDataJson("history").map((data, i) => historyRow(data, i)).reverse()

  return (
    <Layout title="History" topPoem="昔のこと" bottomPoem="遠くまできたね">
      <table id="historyTable">
        <tbody>
          {historyTable}
        </tbody>
      </table>
    </Layout>
  )
}

export default HistoryPage