import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Message from "./message"

const shortcodes = { Message }

export default ({ children }) => (
  <MDXProvider components={shortcodes}>
    <h1>
      <Link to="/">Hello Gatsby MDX</Link>
    </h1>
    {children}
  </MDXProvider>
)
