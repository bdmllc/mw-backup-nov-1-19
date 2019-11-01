import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FeaturedDiscoveries from "../components/Home/FeaturedDiscoveries"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Miami Walking Tours On Foot and Public Transportation."
    />
    <StyledHero home="true" img={data.NightClubHero.childImageSharp.fluid}>
      <Banner
        title="continue onward"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nisi!"
      >
        <AniLink fade to="/tours" className="btn-white">
          explore more
        </AniLink>
      </Banner>
    </StyledHero>
    <FeaturedDiscoveries />
  </Layout>
)

export const query = graphql`
  query {
    NightClubHero: file(relativePath: { eq: "NightClubHero.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
