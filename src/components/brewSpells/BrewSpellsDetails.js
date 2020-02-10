import React, { useContext } from "react"
import { BrewSpellsContext } from "./BrewSpellsDataProvider"
import { SpellTypeContext } from "./SpellTypeProvider"
import { SpellSpellCasterContext } from "./SpellSpellCasterProvider"
import { SpellCasterContext } from "./SpellCasterProvider"



export default (props) => {
  const { brewSpells, deleteBrewSpells } = useContext(BrewSpellsContext)
  const {spellType} = useContext(SpellTypeContext)
  const {spellSpellCaster} = useContext(SpellSpellCasterContext)
  const {spellCaster} = useContext(SpellCasterContext)

  const chosenSpellId = parseInt(props.match.params.brewSpellsId, 10)
  
  


  const spell = brewSpells.find(s => s.id === chosenSpellId) || {}
  const type = spellType.find(st => st.id === spell.typeId) || {}
  

  
  
  const casterIds = spellSpellCaster.filter(s => s.spellId === spell.id) || []
  
  const casters = casterIds.map(c => spellCaster.find(sc => sc.id === c.casterId)) || []
  console.log(casters)




  return (
    <section className="spell">
      <h3 className="spell__name">{spell.name}</h3>
      <div className="spell__type">{type.name}</div>
      <div className="spell__range">{spell.range}</div>
      <div className="spell__description">{spell.description}</div>
      <div className="spell__caster">{spell.duration}</div>
      <div className="spell__duration">{spell.duration}</div>
      


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
