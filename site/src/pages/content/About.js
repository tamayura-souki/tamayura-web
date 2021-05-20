import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/Layout/Layout"
import ProfileData from "../../content/about.json"

import "../../style/pages/content/about.scss"

const ProfileRow = ({ profileKey, profileValue, profileDetail }) => (
  <tr className="profile-row">
    <td className="key">{profileKey}</td>
    <td className="sep">:</td>
    <td>
      <div className="value">{profileValue}</div>
      <div className="detail">{profileDetail}</div>
    </td>
  </tr>
)

ProfileRow.propTypes = {
  profileKey: PropTypes.string.isRequired,
  profileValue: PropTypes.string.isRequired,
  profileDetail: PropTypes.string.isRequired,
}

const ProfileTable = ({ caption, table }) => (
  <div className="profile-table">
    <h2>{caption}</h2>
    <table>
      <tbody>
        {
          table.map((data, i) => (
            <ProfileRow
              key={"profile-row"+i}
              profileKey={data.key}
              profileValue={data.value}
              profileDetail={data.detail}
            />
          ))
        }
      </tbody>
    </table>
  </div>
)

ProfileTable.propTypes = {
  caption: PropTypes.string.isRequired,
  table: PropTypes.arrayOf(PropTypes.exact({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
  })).isRequired,
}

const AboutPage = () => (
  <Layout title="About" topPoem="私のこと" bottomPoem="仲良くしてくださいね">
    <div className="char-image">
      <StaticImage src="../../images/standing1.png" alt="souki"/>
    </div>
    <div className="profile-tables">
      {
        ProfileData.map((data, i) => (
          <div key={"profile-table"+i}>{
            <ProfileTable caption={data.caption} table={data.table}/>
          }</div>
        ))
      }
    </div>
  </Layout>
)

export default AboutPage