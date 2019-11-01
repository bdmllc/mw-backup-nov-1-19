import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Discovery = ({ discovery }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, slug, location, images } = discovery
  console.log(data)

  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="single discovery"
        />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>{location || "default location"}</h4>
        </div>
      </div>
    </article>
  )
}

Discovery.propTypes = {
  discovery: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Discovery
