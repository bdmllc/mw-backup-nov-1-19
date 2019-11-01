import React from "react"
import Discovery from "../Discoveries/Discovery"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getDiscoveries = graphql`
  query {
    discoveries: allContentfulMwDiscoveries {
      edges {
        node {
          name
          slug
          location
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedDiscoveries = () => {
  const response = useStaticQuery(getDiscoveries)
  const discoveries = response.discoveries.edges

  return (
    <section className={styles.discoveries}>
      <Title title="featured" subtitle="discoveries" />
      <div className={styles.center}>
        {discoveries.map(({ node }) => {
          return <Discovery key={node.contentful_id} discovery={node} />
        })}
      </div>

      <AniLink fade to="/tours" className="btn-primary">
        all discoveries
      </AniLink>
    </section>
  )
}

export default FeaturedDiscoveries
