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
  
 


  const spell = brewSpells.find(s => s.id === chosenSpellId) || {}
  const type = spellType.find(st => st.id === spell.typeId) || {}
  console.log(type)
 

  
  
  const casters = spellSpellCaster.filter(s => s.spellId === spell.id) || []
  console.log(casters, "caster")
  


  return (
    <section className="brewSpells__details">
      <h3 className="brewSpells__name">{spell.name}</h3>
      <div className="brewSpells__type">Type: {type.name}</div>
      <div className="brewSpells__caster">Duration: {spell.duration}</div>
      <div className="brewSpells__range">Range:{spell.range}</div>
      <br></br>
      <div className="brewSpells__description">{spell.description}</div>
      <div>
        {casters.map(n => 
          <>
            <div>{n.spellCaster.name}</div>
            
          </>
        )}
        
        </div> 
        
      <br></br>
      <button onClick={() => {
        props.history.push(`/brewery/spellList/edit/${spell.id}`)}
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteBrewSpells(spell).then( () => {
            const genPromises = () => {
              return casters.map(caster =>
              deleteSpellSpellCaster(caster)
              ) 
            } 
              return Promise.all(genPromises())}).then(() => {
            
            
              props.history.push("/brewery/spellList")
            }) 
          }
        


      }>Delete</button>

    
    
    
    
    </section>
    )
}
