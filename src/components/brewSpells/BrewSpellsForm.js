import React, { useContext, useState, useEffect, useRef } from "react"
import { BrewSpellsContext } from "./BrewSpellsDataProvider"
import { SpellTypeContext } from "./SpellTypeProvider"
import { SpellCasterContext } from "./SpellCasterProvider"
import Checkbox from "./CheckBox"




export default props => {

  const { spellCaster } = useContext(SpellCasterContext)
  const { spellType } = useContext(SpellTypeContext)
  const { addBrewSpells, brewSpells, editBrewSpells } = useContext(BrewSpellsContext)
  const [brewSpell, setBrewSpells] = useState({})
  const [checkedCaster, setCheckedCaster] = useState({})

  const type = useRef(0)


  const editMode = props.match.params.hasOwnProperty("brewSpellsId")

  const handleChange = (event) => {
   
    const chosenCaster = Object.assign({}, checkedCaster)
    chosenCaster[event.target.name] = event.target.checked
    setCheckedCaster(chosenCaster)
  }

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

  // handle multiselect
  // handleSelectionChange = (event) => {
  //   const seletedCaster = event.target.value
  //   setSelectedCaster(selectedCaster)
  // }

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
        level: brewSpell.level,
        duration: brewSpell.duration,
        // casterId: casterId,
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
        level: brewSpell.level,
        // casterId: casterId,
        duration: brewSpell.duration,
        range: brewSpell.range,
        userId: parseInt(localStorage.getItem("currentUserId")),

      })

        .then(() => props.history.push("/brewery/spellList"))
    }

  }

  return (

    <div className="BrewSpellsContainer">
      <form className="BrewSpellsBrewSpells">
        <h2 className="BrewSpellsBrewSpells__title">{editMode ? "Update Spell" : "Add Spell"}</h2>

        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Spell Name: </label>
            <input type="text" name="name" required autoFocus className="form-control"
              proptype="varchar"
              placeholder="Spell Name"
              defaultValue={brewSpell.name}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="spellDesc">Description: </label>
            <textarea type="text" name="description" required className="form-control"
              proptype="varchar"
              placeholder="Spell Description"
              defaultValue={brewSpell.description}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="castingTime">Casting Time: </label>
            <input type="text" name="castingTime" className="form-control"
              proptype="varchar"
              placeholder="Casting Time"
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
              onChange={handleControlledInputChange}
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

        <fieldset>
          <div>
            <lable>Caster Type : {checkedCaster["Druid"]} </lable> <br />
            {
              spellCaster.map(sc => (
                <label key={sc.key}>
                  {sc.name}
                  <Checkbox name={sc.name} checked={checkedCaster[sc.name]} onChange={handleChange} />
                </label>
              ))
            }
          </div>

          
          </fieldset>


        <fieldset>
          <div className="form-group">
            <label htmlFor="spellType">Level: </label>
            <input type="level" name="level" className="form-control"
              proptype="integer"
              placeholder="Level"
              value={brewSpell.level}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>



        <fieldset>
          <div className="form-group">
            <label htmlFor="spellRange">Range: </label>
            <input type="text" name="range" className="form-control"
              proptype="varchar"
              placeholder="Spell Range"
              value={brewSpell.range}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="spellDuration">Duration: </label>
            <input type="text" name="duration" className="form-control"
              proptype="varchar"
              placeholder="Spell Duration"
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
          {editMode ? "Save Updates" : "Save Spells"}
        </button>
      </form>
    </div>
  )
}
