import React, { useContext, useState, useEffect } from "react"
import { BrewArmorContext } from "./BrewArmorDataProvider"



export default props => {
  
  const { addBrewArmor, brewArmor, editBrewArmor } = useContext(BrewArmorContext)
  const [armor, setBrewArmor] = useState({})

  const editMode = props.match.params.hasOwnProperty("brewArmorId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newBrewArmor = Object.assign({}, armor)
    newBrewArmor[event.target.name] = event.target.value
    setBrewArmor(newBrewArmor)
  }

  const setDefaults = () => {
    if (editMode) {
      const brewArmorId = parseInt(props.match.params.brewArmorId)
      const selectedBrewArmor = brewArmor.find(a => a.id === brewArmorId) || {}
      setBrewArmor(selectedBrewArmor)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [brewArmor])

  

  const constructNewBrewArmor = () => {
    

    if (editMode) {
      editBrewArmor({
        id: armor.id,
        name: armor.name,
        type: armor.type,
        desc: armor.desc,
        rarity: armor.rarity,
        value: armor.value,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/armorList"))
    } else {
      addBrewArmor({
        id: armor.id,
        name: armor.name,
        desc: armor.desc,
        rarity: armor.rarity,
        value: armor.value,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/armorList"))
    }

  }

  return (
   
<div className="brewArmor__container">
    <form className="brewArmor__form">
      <h2 className="brewArmor__title">{editMode ? "Update Armor" : "Add Armor"}</h2>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="Armor Name"
            defaultValue={armor.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="armorType">Type: </label>
          <input type="text" name="type" required className="form-control"
            proptype="varchar"
            placeholder="Armor Type"
            defaultValue={armor.type}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="armorDesc">Description: </label>
          <textarea type="text" name="desc" required className="form-control"
            proptype="varchar"
            placeholder="Armor Description"
            defaultValue={armor.desc}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

     

      <fieldset>
        <div className="form-group">
          <label htmlFor="armorRarity">Rarity: </label>
          <input type="text" name="rarity" required className="form-control"
            proptype="varchar"
            placeholder="Armor Rarity"
            defaultValue={armor.rarity}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>


      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewBrewArmor()
        }}
        className="btn btn-primary">
        {editMode ? "Save Item" : "Save Armor"}
      </button>
    </form>
    </div>
  )
}
