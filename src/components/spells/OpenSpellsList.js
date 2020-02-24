import React, { useContext } from "react"
import OpenSpells from "./OpenSpells"
import "./OpenSpells.css"


export default (props) => {
  

  
  
    return (

      <>
        

        <div className="openSpells__container">
          {
            props.spells.map( openSpell => {
              
              return <OpenSpells key={openSpell.slug} openSpell={openSpell} />

            })
          }
        </div>

      </>

    )
  

}