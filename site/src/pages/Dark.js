import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import "../style/pages/dark.scss"

const DarkPage = () => (
  <div id="dark">
    <Layout title="Dark" topPoem="connecting......" bottomPoem="......no connection">
      <p className="poem-jp">
        虚空と混沌<br/>
        世も知らず神も知らず<br/>
        仮想と現実の境界を穿ち<br/>
        綻びを結び<br/>
        糸を絶ち道理を通し<br/>
        暴かれた神秘を讃え<br/>
        聖なる監視者を堕ろす<br/>
        開かずの部屋<br/>
        閉じないおもちゃ箱<br/>
        真名に誉れを生命に喝采を<br/>
        悠久で玉響な密会よ開け
      </p>
      <p className="poem-en">
        Void, chaos.<br/>
        Unknown principle, Unknown creator.<br/>
        All differences ruined between virtual and real.<br/>
        All exceptions disappeared behind truth.<br/>
        Bonds fell silent. Promises became true.<br/>
        Congratulations on rational mysteries.<br/>
        The grave keeper got fired.<br/>
        My room without any door.<br/>
        The toy box without any clamp.<br/>
        Great realities. Legitimate existences.<br/>
        Welcome to virtual world.<br/>
      </p>
      <div className="magic-image">
        <div className="magic-back">
          <StaticImage src="../images/magic.png" alt="gate1"/>
        </div>
        <div className="magic-front">
          <a href="https://immortality-web.netlify.app/">
            <StaticImage src="../images/icon.png" className="magic-front" alt="gate2"/>
          </a>
        </div>
      </div>
      <p className="poem-jp">
        人になるもの人となるもの<br/>
        信念が神秘を殺し<br/>
        真実の鏡が虚像を結び<br/>
        想像が創造を生じ<br/>
        空白が七色を生じ<br/>
        無垢な破片に約束を<br/>
        朽ちた屑鉄に信念を<br/>
        空の集合よ現実を記せ
      </p>
      <p className="poem-en">
        Human beings, human becomings.<br/>
        My bird killed my parents.<br/>
        The honest eyes show phantasms.<br/>
        Thinking are creating.<br/>
        Colorless makes the rainbow.<br/>
        Gather new fragments.<br/>
        Build old scraps.<br/>
        Phi will project the world.
      </p>
    </Layout>
  </div>
)

export default DarkPage