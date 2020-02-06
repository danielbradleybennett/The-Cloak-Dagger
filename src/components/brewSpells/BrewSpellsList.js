import React, { useContext } from "react"
import { BrewSpellsContext } from "./BrewSpellsDataProvider"
import BrewSpells from "./BrewSpells"
import "./BrewSpells.css"


export default (props) => {
  
  const { brewSpells } = useContext(BrewSpellsContext)

  
    
    return (

      <>
        <button onClick={
        () => props.history.push("/brewery/spellList/create")}>
        New Spell
        </button>

        <div className="brewSpells">
          {
            brewSpells.map(brewSpell => {
              
              return <BrewSpells key={brewSpell.id} brewSpell={brewSpell} />
            })
          }
        </div>

      </>

    )
  

}