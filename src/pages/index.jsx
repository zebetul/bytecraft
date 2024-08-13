import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import SectionHero from "../components/index/SectionHero"
import TechBanner from "../components/index/TechBanner"

const IndexPage = () => (
  <Layout>
    <SectionHero />

    <TechBanner />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
