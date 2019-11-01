import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Discoveries from "../components/Discoveries/Discoveries.js"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Tours"
          description="Miami Walking Tours On Foot and Public Transportation."
        />
        <StyledHero img={this.props.data.biltmoreHero.childImageSharp.fluid} />
        <Discoveries />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    biltmoreHero: file(relativePath: { eq: "biltmoreHero.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
