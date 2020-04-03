import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        nodes {
          contentPageData {
            name
            path
            description
          }
        }
      }
    }
  `)

  const dataArray = data.allDataJson.nodes.filter(({ contentPageData }) => contentPageData);
  var contentPageData = {};
  for (const data of dataArray) {
    contentPageData = Object.assign(contentPageData, data);
  }

  return contentPageData.contentPageData;
}