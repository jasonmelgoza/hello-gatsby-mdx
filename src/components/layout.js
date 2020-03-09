import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import NewComponent from "./NewComponent"

const shortcodes = { NewComponent }

export default ({ children }) => (
  <MDXProvider components={shortcodes}>
    <h1>
      <Link to="/">Hello Gatsby MDX</Link>
    </h1>
    {children}
  </MDXProvider>
)
