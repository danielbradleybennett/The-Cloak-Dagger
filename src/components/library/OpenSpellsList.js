import React, { useContext } from "react"
import OpenSpells from "./OpenSpells"
import "./OpenSpells.css"


export default (props) => {
  

  
    console.log(props.spells)
    return (

      <>
        

        <div className="OpenSpells">
          {
            props.spells.map( openSpell => {
              
              return <OpenSpells key={openSpell.slug} openSpell={openSpell} />

            })
          }
        </div>

      </>

    )
  

}