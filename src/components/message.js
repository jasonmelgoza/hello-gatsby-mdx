import React from "react"

export default ({ children }) => (
  <div
    className="message"
    style={{ backgroundColor: "blue", color: "white", padding: "20px" }}
  >
    <strong>{children}</strong>
  </div>
)
