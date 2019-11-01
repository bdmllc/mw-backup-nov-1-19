import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"

const Template = ({ data }) => {
  const {
    name,
    location,
    description: { description },
    images,
  } = data.discovery

  const [mainImage, ...discoveryImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {discoveryImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <h4>{location}</h4>
          </div>
          <div className={styles.info}>
            <p className={styles.desc}>{description}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    discovery: contentfulMwDiscoveries(slug: { eq: $slug }) {
      name
      location
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Template
