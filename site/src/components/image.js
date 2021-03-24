import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

// 参考: https://takumon.com/simple-gatsby-image-wrapper
// 画像ファイルパスをプロパティに取るようなコンポーネントを定義
const Image = ({ filename }) => (

  // ページじゃないコンポーネントでもGraphQLが使えるように
  // StaticQueryタグを使う
  <StaticQuery

    // GraphQLのクエリ引数には何も指定しない！
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    `}

    // 全画像情報がdataに代入されている
    render={(data) => {

      // 指定した画像ファイルパス（コンポーネントのプロパティ）と
      // 一致するgatsby-image用の情報を取得
      const image_data = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })


      if (!image_data) return
      const image = getImage(image_data.node)
      if (!image) return
      return <GatsbyImage image={image} alt="lost" />
    }}
  />
)

export default Image