import React, { useContext } from "react"
import { TheWorldContext } from "./TheWorldDataProvider"
import TheWorld from "./TheWorld"
import "./TheWorld.css"


export default (props) => {
  
  const { theWorld } = useContext(TheWorldContext)
  
  const currentUserId = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserWorld = theWorld.filter(w => w.userId === currentUserId)
  
    
    return (

      <>
        <button className="world--button" onClick={
        () => props.history.push("/lore/worldList/create")}>
        New World
        </button>

        <div className="world__container">
          {
            currentUserWorld.map(world => {
              
              return <TheWorld key={world.id} world={world} />
            })
          }

        
        </div>

      </>

    )
  

}