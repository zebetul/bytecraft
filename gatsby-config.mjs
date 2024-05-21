/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#175073`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#175073`,
        display: `minimal-ui`,
        icon: `src/assets/icons/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      // Plugin to load SVG files like icons as React components
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // Includes all SVG files in the images folder
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans\:300,400,500,600,700`,
          `Roboto\:100,300,400,500,700,900`,
        ],
        display: "swap",
      },
    },
  ],

  siteMetadata: {
    title: `Bytecraft`,
    description: `We craft custom digital solutions for your business.`,
    author: `@bytecraft`,
    siteUrl: `https://bytecraft.ro/`,
  },
}

export default config
