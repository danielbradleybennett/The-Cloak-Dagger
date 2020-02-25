import React, { useContext } from "react"
import OpenClasses from "./OpenClasses"
import "./OpenClasses.css"

export default (props) => {
 
    return (

      <>
        <div className="openClasses__container">
          {
            props.classes.map( openClass => {
        
              return <OpenClasses key={openClass.slug} openClass={openClass} />

            })
          }
        </div>

      </>

    )
}