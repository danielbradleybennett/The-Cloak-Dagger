import React, { useContext } from "react"
import OpenConditions from "./OpenConditions"
import "./OpenConditions.css"


export default (props) => {
  

console.log(props.conditions)
    
    return (

      <>
        

        <div className="openConditions__container">
          {
            props.conditions.map( openCondition => {
              
              return <OpenConditions key={openCondition.slug} openCondition={openCondition} />

            })
          }
        </div>

      </>

    )
  

}
