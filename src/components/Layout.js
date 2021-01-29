import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import NewComponent from "./NewComponent"

const shortcodes = { NewComponent }

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MDXProvider components={shortcodes}>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        {children}
      </MDXProvider>
    </>
  )
}
