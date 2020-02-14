import React, { useContext } from "react"
import { BrewSpellsContext } from "./BrewSpellsDataProvider"
import { SpellTypeContext } from "./SpellTypeProvider"
import { SpellSpellCasterContext } from "./SpellSpellCasterProvider"
import { SpellCasterContext } from "./SpellCasterProvider"



export default (props) => {
  const { brewSpells, deleteBrewSpells } = useContext(BrewSpellsContext)
  const {spellType} = useContext(SpellTypeContext)
  const {spellSpellCaster, deleteSpellSpellCaster} = useContext(SpellSpellCasterContext)
  const {spellCaster} = useContext(SpellCasterContext)

  const chosenSpellId = parseInt(props.match.params.brewSpellsId, 10)
 

  const spellSpell = brewSpells.filter(sc => sc.id === spellSpellCaster.spellId)
  const chosenSpellSpell = parseInt(props.match.params.brewSpellsId, 10)
  // const spellSpellTable = spellSpellCaster.filter(s => spellId === )
  // const spellSpell = spellSpellCaster.find(ss => ss.spellId === chosenSpellId) || {}
  // const spellSpellJoin = spellSpellTable.find(sst => sst.spellId === chosenSpellId)



  
  


  const spell = brewSpells.find(s => s.id === chosenSpellId) || {}
  const type = spellType.find(st => st.id === spell.typeId) || {}
  console.log(type)
 

  
  
  const casters = spellSpellCaster.filter(s => s.spellId === spell.id) || []
  console.log(casters, "caster")
  


  return (
    <section className="spell">
      <h3 className="spell__name">{spell.name}</h3>
      <div className="spell__type">Type: {type.name}</div>
      <div className="spell__caster">Duration: {spell.duration}</div>
      <div className="spell__range">Range:{spell.range}</div>
      <br></br>
      <div className="spell__description">{spell.description}</div>
      <div>
        {casters.map(n => 
          <>
            <div>{n.spellCaster.name}</div>
            
          </>
        )}
        
        </div> 
        

      <button onClick={() => {
        props.history.push(`/brewery/spellList/edit/${spell.id}`)}
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteBrewSpells(spell)
            .then(() => {
              props.history.push("/brewery/spellList")
            }) }
        


      }>Delete</button>

    
    
    
    
    </section>
    )
}
