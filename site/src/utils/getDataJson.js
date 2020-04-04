import { useStaticQuery, graphql } from "gatsby"

const GetDataJson = key => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        nodes {
          contentPageData {
            name
            description
            path
          }
          about {
            caption
            table {
              detail
              key
              value
            }
          }
        }
      }
    }
  `)

  const dataArray = data.allDataJson.nodes.filter(dict => dict[key])
  var dataDict = {}
  for (const data of dataArray) {
    dataDict = Object.assign(dataDict, data)
  }

  return dataDict[key]
}

export default GetDataJson
