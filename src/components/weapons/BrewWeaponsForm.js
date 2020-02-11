import React, { useContext, useState, useEffect } from "react"
import { BrewWeaponsContext } from "./BrewWeaponsDataProvider"



export default props => {

  const { addBrewWeapons, brewWeapons, editBrewWeapons } = useContext(BrewWeaponsContext)
  const [brewWeapon, setBrewWeapons] = useState({})

  const editMode = props.match.params.hasOwnProperty("brewWeaponsId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newBrewWeapons = Object.assign({}, brewWeapon)
    newBrewWeapons[event.target.name] = event.target.value
    setBrewWeapons(newBrewWeapons)
  }

  const setDefaults = () => {
    if (editMode) {
      const brewWeaponsId = parseInt(props.match.params.brewWeaponsId)
      const selectedBrewWeapons = brewWeapons.find(bw => bw.id === brewWeaponsId) || {}
      setBrewWeapons(selectedBrewWeapons)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [brewWeapons])



  const constructNewBrewWeapons = () => {


    if (editMode) {
      editBrewWeapons({
        id: brewWeapon.id,
        name: brewWeapon.name,
        type: brewWeapon.type,
        damage: brewWeapon.damage,
        desc: brewWeapon.desc,
        rarity: brewWeapon.rarity,

        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/weaponList"))
    } else {
      addBrewWeapons({
        id: brewWeapon.id,
        name: brewWeapon.name,
        type: brewWeapon.type,
        damage: brewWeapon.damage,
        desc: brewWeapon.desc,
        rarity: brewWeapon.rarity,

        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/weaponList"))
    }

  }

  return (

    <div className="brewWeaponsContainer">
      <form className="brewWeapons__form">
        <h2 className="brewWeapons__title">{editMode ? "Update Weapons" : "Add Weapons"}</h2>

        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" required autoFocus className="form-control"
              proptype="varchar"
              placeholder="Weapons Name"
              defaultValue={brewWeapon.name}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="weaponType">Type: </label>
            <input type="text" name="type" required className="form-control"
              proptype="varchar"
              placeholder="Weapon Type"
              defaultValue={brewWeapon.type}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>


        <fieldset>
          <div className="form-group">
            <label htmlFor="weaponDamage">Damage:</label>
            <input type="text" name="damage" required className="form-control"
              proptype="varchar"
              placeholder="Weapon Damage"
              defaultValue={brewWeapon.damage}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>


        <fieldset>
          <div className="form-group">
            <label htmlFor="weaponValue">Value: </label>
            <input type="text" name="value" required className="form-control"
              proptype="varchar"
              placeholder="Weapon Value"
              defaultValue={brewWeapon.value}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="noteDesc">Description: </label>
            <input type="text" name="desc" required className="form-control"
              proptype="varchar"
              placeholder="Weapon Description"
              defaultValue={brewWeapon.desc}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="weaponValue">Rarity: </label>
            <input type="text" name="rarity" required className="form-control"
              proptype="varchar"
              placeholder="Weapon Rarity"
              defaultValue={brewWeapon.rarity}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>
        {/* Need Dropdown */}


        <button type="submit"
          onClick={evt => {
            evt.preventDefault()
            constructNewBrewWeapons()
          }}
          className="btn btn-primary">
          {editMode ? "Save Update" : "Save Weapons"}
        </button>
      </form>
    </div>
  )
}
