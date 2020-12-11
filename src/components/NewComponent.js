import React from "react"
import Styles from "./Style.module.scss";

function NewComponent(props) {
  return (
    <div style={{ backgroundColor: "blue", color: "white", padding: "20px" }}>
      <strong className={`ui ${Styles.root}`}>{props.children}</strong>
    </div>
  )
}

export default NewComponent
