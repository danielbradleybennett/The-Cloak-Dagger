import React, { useContext, useState, useEffect } from "react"
import { BrewSpellsContext } from "./BrewSpellsDataProvider"



export default props => {
  
  const { addBrewSpells, brewSpells, editBrewSpells } = useContext(BrewSpellsContext)
  const [brewSpell, setBrewSpells] = useState({})

  const editMode = props.match.params.hasOwnProperty("brewSpellsId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newBrewSpells = Object.assign({}, brewSpell)
    newBrewSpells[event.target.name] = event.target.value
    setBrewSpells(newBrewSpells)
  }

  const setDefaults = () => {
    if (editMode) {
      const brewSpellsId = parseInt(props.match.params.brewSpellsId)
      const selectedBrewSpells = brewSpells.find(bs => bs.id === brewSpellsId) || {}
      setBrewSpells(selectedBrewSpells)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [brewSpells])

  

  const constructNewBrewSpells = () => {
    

    if (editMode) {
      editBrewSpells({
        id: brewSpell.id,
        name: brewSpell.name,
        spellDesc: brewSpell.spellDesc,
        castingTime: brewSpell.castTime,
        // spellType: brewSpell.spellType,
        spellDuration: brewSpell.spellDur,
        // spellCasterType: brewSpell.spellCasterType,
        spellRange: brewSpell.spellRange,
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/spellList"))
    } else {
      addBrewSpells({
        name: brewSpell.name,
        spellDesc: brewSpell.spellDesc,
        castingTime: brewSpell.castTime,
        // spellType: brewSpell.spellType,
        spellDuration: brewSpell.spellDur,
        // spellCasterType: brewSpell.spellCasterType,
        spellRange: brewSpell.spellRange,
        userId: parseInt(localStorage.getItem("currentUserId")),
        
      })
        .then(() => props.history.push("/brewery/spellList"))
    }

  }

  return (
   
<div className="BrewSpellsContainer">
    <form className="BrewSpellsBrewSpells">
      <h2 className="BrewSpellsBrewSpells__title">{editMode ? "Update BrewSpells" : "Add BrewSpells"}</h2>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Spell Name: </label>
          <input type="text" name="name" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="BrewSpells name"
            defaultValue={brewSpell.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="spellDesc">Spell Description: </label>
          <input type="text" name="spellDesc" required className="form-control"
            proptype="varchar"
            placeholder="BrewSpells spellDesc"
            defaultValue={brewSpell.spellDesc}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>


      <fieldset>
        <div className="form-group">
          <label htmlFor="castingTime">Spell Casting Time: </label>
          <input type="text" name="castingTime" className="form-control"
            proptype="varchar"
            placeholder="castingTime"
            value={brewSpell.castingTime}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>
{/* need a dropdown */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="spellType">Spell Type: </label>
          <input type="spellType" name="spellType" className="form-control"
            proptype="varchar"
            placeholder="spellType"
            value={brewSpell.spellType}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>
{/* need a dropdown */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="spellCasterType">Spell Caster Type: </label>
          <input type="text" name="spellCasterType" className="form-control"
            proptype="varchar"
            placeholder="spellCasterType"
            value={brewSpell.spellCasterType}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="spellRange">Spell Range: </label>
          <input type="text" name="spellRange" className="form-control"
            proptype="varchar"
            placeholder="spellRange"
            value={brewSpell.spellRange}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="spellDuration">Spell Duration: </label>
          <input type="text" name="spellDuration" className="form-control"
            proptype="varchar"
            placeholder="spellDuration"
            value={brewSpell.spellDuration}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>






      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewBrewSpells()
        }}
        className="btn btn-primary">
        {editMode ? "Save Updates" : "Save BrewSpells"}
      </button>
    </form>
    </div>
  )
}
