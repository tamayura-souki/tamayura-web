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
          history {
            date
            date2
            text
            detail
            link
          }
          works {
            caption
            detail
            contents {
              name
              link
              description
              image
            }
          }
          stamps {
            path
          }
          links {
            caption
            description
            linkList {
              name
              detail
              link
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
