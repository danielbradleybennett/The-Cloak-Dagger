import React, { useContext } from "react"
import { BrewSpellsContext } from "./BrewSpellsDataProvider"
// import "./Animals.css"


export default (props) => {
  const { brewSpells, deleteBrewSpells } = useContext(BrewSpellsContext)

  const chosenSpellId = parseInt(props.match.params.brewSpellsId, 10)

  const spell = brewSpells.find(s => s.id === chosenSpellId) || {}


  return (
    <section className="spell">
      <h3 className="spell__name">{spell.name}</h3>
      <div className="spell__description">{spell.desc}</div>
      
      <button onClick={() => {
        props.history.push(`/brewery/spellList/edit/${spell.id}`)
      }
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteBrewSpells(spell)
            .then(() => {
              props.history.push("/brewery/spellList")
            })
        }
      }>Delete</button>

    
    
    
    
    </section>
    )
}
