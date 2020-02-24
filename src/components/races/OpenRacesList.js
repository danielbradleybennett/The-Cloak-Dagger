import React, { useContext } from "react"
import OpenRaces from "./OpenRaces"
import "./OpenRaces.css"


export default (props) => {
 
    return (

      <>
        
        <div className="openRaces__container">
          {
            props.races.map( openRace => {
        
              return <OpenRaces key={openRace.slug} openRace={openRace} />

            })
          }
        </div>
      </>
    )
}