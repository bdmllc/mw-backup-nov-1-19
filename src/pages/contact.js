import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function contact({ data }) {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Miami Walking Tours On Foot and Public Transportation."
      />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
