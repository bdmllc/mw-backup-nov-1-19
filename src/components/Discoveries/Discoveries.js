import React from "react"
import DiscoveryList from "./DiscoveryList"
import { useStaticQuery, graphql } from "gatsby"

const getDiscoveries = graphql`
  {
    discoveries: allContentfulMwDiscoveries {
      edges {
        node {
          name
          slug
          location
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Discoveries = () => {
  const { discoveries } = useStaticQuery(getDiscoveries)
  return <DiscoveryList discoveries={discoveries} />
}

export default Discoveries
