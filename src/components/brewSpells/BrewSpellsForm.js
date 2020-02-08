import React, { useContext, useState, useEffect, useRef } from "react"
import { BrewSpellsContext } from "./BrewSpellsDataProvider"
import {SpellTypeContext} from "./SpellTypeProvider"
// import {SpellSpellCaster} from "./SpellSpellCaster"



export default props => {

  // const {spellCaster}
  const {spellType} = useContext(SpellTypeContext)
  const { addBrewSpells, brewSpells, editBrewSpells } = useContext(BrewSpellsContext)
  const [brewSpell, setBrewSpells] = useState({})
  const type = useRef(0)
  console.log(spellType)

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

    const typeId = parseInt(type.current.value)


    if (editMode) {
      editBrewSpells({
        id: brewSpell.id,
        name: brewSpell.name,
        description: brewSpell.description,
        castingTime: brewSpell.castingTime,
        typeId: typeId,
        duration: brewSpell.duration,
        // spellCasterType: brewSpell.spellCasterType,
        range: brewSpell.range,
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/spellList"))
    } else {
      addBrewSpells({
        name: brewSpell.name,
        description: brewSpell.description,
        castingTime: brewSpell.castingTime,
        typeId: typeId,
        duration: brewSpell.duration,
        // spellCasterType: brewSpell.spellCasterType,
        range: brewSpell.range,
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
            <input type="text" name="description" required className="form-control"
              proptype="varchar"
              placeholder="BrewSpells spellDesc"
              defaultValue={brewSpell.description}
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
        {/* dropdown */}
        <fieldset>
          <div className="form-group">
            <label htmlFor="typeId">Spell Type </label>
            <select
              defaultValue=""
              name="typeId"
              ref={type}
              id="spellType"
              className="form-control">
                
              <option value="0">Select a Spell Type</option>
              {spellType.map(st => (
                <option key={st.id} value={st.id}>
                  {st.name}
                  
                </option>
              ))
            
              }
              
            </select>
          </div>
        </fieldset>

        {/* <fieldset>
          <div className="form-group">
            <label htmlFor="typeId">Spell Caster </label>
            <select
              defaultValue=""
              name="typeId"
              ref={type}
              id="spellType"
              className="form-control">
                
              <option value="0">Select a Spell Type</option>
              {spellType.map(st => (
                <option key={st.id} value={st.id}>
                  {st.name}
                  
                </option>
              ))
            
              }
              
            </select>
          </div>
        </fieldset> */}









        {/* <fieldset>
          <div className="form-group">
            <label htmlFor="spellType">Spell Type: </label>
            <input type="spellType" name="spellType" className="form-control"
              proptype="varchar"
              placeholder="spellType"
              value={brewSpell.spellType}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset> */}
        {/* need a dropdown */}
        {/* <fieldset>
          <div className="form-group">
            <label htmlFor="spellCasterType">Spell Caster Type: </label>
            <input type="text" name="spellCasterType" className="form-control"
              proptype="varchar"
              placeholder="spellCasterType"
              value={brewSpell.spellCasterType}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset> */}

        <fieldset>
          <div className="form-group">
            <label htmlFor="spellRange">Spell Range: </label>
            <input type="text" name="range" className="form-control"
              proptype="varchar"
              placeholder="spell range"
              value={brewSpell.range}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="spellDuration">Spell Duration: </label>
            <input type="text" name="duration" className="form-control"
              proptype="varchar"
              placeholder="spell duration"
              value={brewSpell.duration}
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
