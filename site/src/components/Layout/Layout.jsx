import * as React from "react"
import PropTypes from "prop-types"

import Seo from "../Seo/Seo"
import Header from "../Header/Header"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import Footer from "../Footer/Footer"

import "../../style/components/layout.scss"

const Layout = ({ title, topPoem, bottomPoem, children }) => (
  <div id="global" onTouchStart={null}>
    <Seo title={title} />
    <Header poem={topPoem} />
    <div id="announce">
      <h3>† お知らせ †</h3>
      <p>現在、「珠響そうき」の中の人の活動をすべてまとめた個人サークルサイトを製作しています。</p>
      <p>今後「珠響そうき」の情報はすべて、新しくできる個人サークルサイトの下に掲載する予定なので、そちらを参照してください。</p>
      <p>個人サークルサイトは2023年度いっぱいかけて、製作予定です。</p>
      <p>このサイトは2022年5月28日のコミット, およびこのメッセージの追加を最後に更新されません。</p>
      <a href="https://visterminal.net">個人サークルサイト「Visterminal」はこちら</a>
    </div>
    <main>{children}</main>
    <ScrollToTop />
    <Footer poem={bottomPoem}/>
  </div>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  topPoem: PropTypes.string,
  bottomPoem: PropTypes.string,
}

export default Layout