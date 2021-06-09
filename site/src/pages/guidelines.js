import * as React from "react"

import Layout from "../components/Layout/Layout"

import "../style/pages/guildelines.scss"

const GuidelinesPage = () => (
  <Layout
    title="Guidelines"
    topPoem="お願い"
    bottomPoem="あなたと私の約束"
  >
    <div className="guidelines">
      <h1>配信を見る上での注意</h1>
      <ul>
        <li>他の人が不快になるようなコメントは避けてください</li>
        <li>珠響そうきは好き勝手ドリブンな配信者なので、指示コメント等しても無駄な場合がありますご了承ください</li>
        <li>定期配信は行っておりません。すいません</li>
        <li>特に固定の挨拶とかリスナー名とかありません。初見さんも安心してご視聴いただけます</li>
        <li>感想はハッシュタグ #しゅにひびけ もしくはYouTubeのコメント欄へ</li>
      </ul>

      <h1>二次創作について</h1>
      <h2>普通の二次創作について</h2>
      <ul>
        <li>私が作成した一次素材をそのまま使用することはやめてください</li>
        <li>一部、二次創作に使用可な素材も配布しています。各素材の使用条件を読んで使ってください</li>
        <li>ファンアートや漫画、小説、グッズ等については自由に作ってもらってかまいません</li>
        <li>同人の範囲なら、同人誌やグッズの有料頒布は自由にやってください</li>
        <li>珠響そうきの二次創作物について起きた問題は二次創作者の方で対処してください</li>
        <li>宗教活動等には使わないでください</li>
      </ul>

      <h2>切り抜き動画について</h2>
      <ul>
        <li>基本的に自由にどうぞ</li>
        <li>ただし、配信では色々なフリー素材を使っており、それらにもライセンスがあるので、各自で判断おねがいします</li>
      </ul>
    </div>
  </Layout>
)
export default GuidelinesPage