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
        desc: brewWeapon.desc,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/weaponList"))
    } else {
      addBrewWeapons({
        id: brewWeapon.id,
        name: brewWeapon.name,
        desc: brewWeapon.desc,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/weaponList"))
    }

  }

  return (
   
<div className="brewWeaponsContainer">
    <form className="brewWeapons__Form">
      <h2 className="brewWeapons__title">{editMode ? "Update Weapons" : "Add Weapons"}</h2>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Weapon Name: </label>
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
          <label htmlFor="noteDesc">Weapon Description: </label>
          <input type="text" name="desc" required className="form-control"
            proptype="varchar"
            placeholder="Weapon Description"
            defaultValue={brewWeapon.desc}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>


      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewBrewWeapons()
        }}
        className="btn btn-primary">
        {editMode ? "Save Weapon" : "Save Weapons"}
      </button>
    </form>
    </div>
  )
}
