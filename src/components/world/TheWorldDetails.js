import React, { useContext } from "react"
import { TheWorldContext } from "./TheWorldDataProvider"
import "./TheWorld.css"


export default (props) => {
  const { theWorld, deleteTheWorld } = useContext(TheWorldContext)

  const chosenTheWorldId = parseInt(props.match.params.theWorldId, 10)

  const world = theWorld.find(w => w.id === chosenTheWorldId) || {}


  return (
    <section className="theWorldDetail">
      <h3 className="world__name">{world.title}</h3>
      <div className="world__description">{world.desc}</div>
      
      <br></br>
      <button onClick={() => {
        props.history.push(`/lore/worldList/edit/${world.id}`)
      }
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteTheWorld(world)
            .then(() => {
              props.history.push("/lore/worldList")
            })
        }
      }>Delete</button>

    
    
    
    
    </section>
    )
}
