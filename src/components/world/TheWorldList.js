import React, { useContext } from "react"
import { TheWorldContext } from "./TheWorldDataProvider"
import TheWorld from "./TheWorld"
import "./TheWorld.css"


export default (props) => {
  
  const { theWorld } = useContext(TheWorldContext)
console.log(theWorld)
  
    
    return (

      <>
        <button onClick={
        () => props.history.push("/vyasa/worldList/create")}>
        New World
        </button>

        <div className="worldList">
          {
            theWorld.map(world => {
              
              return <TheWorld key={world.id} world={world} />
            })
          }

        
        </div>

      </>

    )
  

}