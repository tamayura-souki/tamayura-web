import * as React from "react"
import PropTypes from "prop-types"

import Layout from "../../components/Layout/Layout"
import HistoryData from "../../content/history.json"

import "../../style/pages/content/history.scss"

const HistoryRow = ({ date, date2, caption, detail, link }) => {
  if (date2) date = (<>{date} ~ <br/> {date2} </>)
  let text = (
    <>
      <div className="caption">{caption}</div>
      <div className="detail">{detail}</div>
    </>
  )
  if(link) text = (<a href={link}>{text}</a>)
  return (
    <tr className="history-row">
      <td className="date">{date}</td>
      <td>{text}</td>
    </tr>
  )
}

HistoryRow.propTypes = {
  date: PropTypes.string.isRequired,
  date2: PropTypes.string,
  caption: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  link: PropTypes.string,
}

const HistoryPage = () => (
  <Layout title="History" topPoem="これまでのこと" bottomPoem="遠くまできたね">
    <table className="history-table">
      <tbody>
        {
          HistoryData.map((data, i) => (
            <HistoryRow
              key={"hitory-row"+i}
              date={data.date}
              date2={data.date2}
              caption={data.caption}
              detail={data.detail}
              link={data.link}
            />
          )).reverse()
        }
      </tbody>
    </table>
  </Layout>
)

export default HistoryPage