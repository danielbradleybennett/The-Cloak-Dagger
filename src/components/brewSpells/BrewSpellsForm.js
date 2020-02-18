import React, { useContext, useState, useEffect, useRef } from "react"
import { BrewSpellsContext } from "./BrewSpellsDataProvider"
import { SpellTypeContext } from "./SpellTypeProvider"
import { SpellCasterContext } from "./SpellCasterProvider"
import Checkbox from "./CheckBox"
import { SpellSpellCasterContext } from "./SpellSpellCasterProvider"





export default props => {

  const { spellCaster } = useContext(SpellCasterContext)
  const { spellSpellCaster, addSpellSpellCaster, deleteSpellSpellCaster } = useContext(SpellSpellCasterContext)
  const { spellType } = useContext(SpellTypeContext)
  const { addBrewSpells, brewSpells, editBrewSpells, getBrewSpells } = useContext(BrewSpellsContext)
  const [brewSpell, setBrewSpells] = useState({})
  const [checkedCaster, setCheckedCaster] = useState({})
  const [initialChecked, setInitialChecked] = useState({})

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
      const selectedSpellSpellCasters = spellSpellCaster.filter(s => s.spellId === brewSpellsId)
      const checked = {}
      selectedSpellSpellCasters.forEach(caster => {
        const caster1 = spellCaster.find(cs => cs.id === caster.spellCasterId) || { name: "" }
        const castername = caster1.name
        checked[castername] = true
      })

      setCheckedCaster(checked)
      setInitialChecked(checked)
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
        level: brewSpell.level,
        duration: brewSpell.duration,

        range: brewSpell.range,
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => {
          const checked = Object.keys(checkedCaster).filter(key => checkedCaster[key] === true);
          const initChecked = Object.keys(initialChecked).filter(key => initialChecked[key] === true);
          const newCastersNames = checked.filter(caster => !initChecked.includes(caster))
          const deletedCastersNames = initChecked.filter(caster => !checked.includes(caster))
          const deletedItems = spellSpellCaster.filter(sc => sc.spellId === brewSpell.id && deletedCastersNames.includes(sc.spellCaster.name))
          const genDeletePromises = () => deletedItems.map(deleteSpellSpellCaster)
          const genAddPromises = () => newCastersNames.map((key) => {
            const spellCasterId = spellCaster.find(caster => caster.name === key)
            return addSpellSpellCaster({
              spellId: brewSpell.id,
              spellCasterId: spellCasterId.id
            })
          }

          )
          return Promise.all(genDeletePromises()).then(() => Promise.all(genAddPromises()));
        })
        .then(() => props.history.push("/brewery/spellList"))
    } else {
      addBrewSpells({
        name: brewSpell.name,
        description: brewSpell.description,
        castingTime: brewSpell.castingTime,
        typeId: typeId,
        level: brewSpell.level,

        duration: brewSpell.duration,
        range: brewSpell.range,
        userId: parseInt(localStorage.getItem("currentUserId")),

      })

        // Join table for SpellSpellCaster Provider
        .then((spell) => {
          const spellId = spell.id
          for (const key in checkedCaster) {
            if (checkedCaster[key] === true) {
              const spellCasterId = spellCaster.find(caster => caster.name === key)

              addSpellSpellCaster({
                spellId: spellId,
                spellCasterId: spellCasterId.id
              })
            }
          }
        })

        .then(getBrewSpells)

        .then(() => props.history.push("/brewery/spellList"))


    }

  }
  //console.log(checkedCaster)
  return (

    <div className="brewSpells__container">
      <form className="brewSpells__form">
        <h2 className="brewSpells__title">{editMode ? "Update Spell" : "Add Spell"}</h2>

        <div className="spellForm__container">

          <div className="form-group">
            <label htmlFor="name">Spell Name: </label>
            <input type="text" name="name" required autoFocus className="form-control"
              proptype="varchar"
              placeholder="Spell Name"
              defaultValue={brewSpell.name}
              onChange={handleControlledInputChange}
            />

          </div>
          <div className="form-group">
            <label htmlFor="spellType">Level: </label>
            <input type="level" name="level" className="form-control"
              proptype="integer"
              placeholder="Level"
              value={brewSpell.level}
              onChange={handleControlledInputChange}>
            </input>
          </div>

        </div>


        <div className="spellForm__container">
          <div className="form-group">
            <label htmlFor="castingTime">Casting Time: </label>
            <input type="text" name="castingTime" className="form-control"
              proptype="varchar"
              placeholder="Casting Time"
              value={brewSpell.castingTime}
              onChange={handleControlledInputChange}>
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="spellRange">Range: </label>
            <input type="text" name="range" className="form-control"
              proptype="varchar"
              placeholder="Spell Range"
              value={brewSpell.range}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </div>

        {/* dropdown for Spell Type */}

        <div className="duration__caster">
          <div className="form-group">
            <label htmlFor="spellDuration">Duration: </label>
            <input type="text" name="duration" className="form-control"
              proptype="varchar"
              placeholder="Spell Duration"
              value={brewSpell.duration}
              onChange={handleControlledInputChange}>
            </input>
          </div>
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
              ))}
            </select>
          </div>
        </div>


          {/* checkboxes for Caster Type */}
          <div className="checkedCaster">
            <lable>Caster Type : {checkedCaster["Druid"]}</lable> <br />
            {
              spellCaster.map(sc => (
                <label key={sc.key}>
                  {sc.name}
                  <Checkbox name={sc.name} checked={checkedCaster[sc.name]} onChange={handleChange} />
                </label>
              ))
            }
          </div>


        <div>
          <label htmlFor="spellDesc">Description: </label>
          <textarea type="text" name="description" required className="form-control"
            proptype="varchar"
            placeholder="Spell Description"
            defaultValue={brewSpell.description}
            onChange={handleControlledInputChange}
          />
        </div>










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

