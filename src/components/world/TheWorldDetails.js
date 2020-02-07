import React, { useContext } from "react"
import { TheWorldContext } from "./TheWorldDataProvider"
import "./TheWorld.css"


export default (props) => {
  const { theWorld, deleteTheWorld } = useContext(TheWorldContext)

  const chosenTheWorldId = parseInt(props.match.params.theWorldId, 10)

  const world = theWorld.find(w => w.id === chosenTheWorldId) || {}


  return (
    <section className="theWorldDetail">
      <h3 className="theWorldDetail__name">{world.name}</h3>
      <div className="theWorldDetail__description">{world.desc}</div>
      
      <button onClick={() => {
        props.history.push(`/vyasa/worldList/edit/${world.id}`)
      }
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteTheWorld(world)
            .then(() => {
              props.history.push("/vyasa/worldList")
            })
        }
      }>Delete</button>

    
    
    
    
    </section>
    )
}
