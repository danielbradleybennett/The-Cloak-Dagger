import React, { useContext, useState, useEffect } from "react"
import { BrewItemsContext } from "./BrewItemsDataProvider"



export default props => {
  
  const { addBrewItems, brewItems, editBrewItems } = useContext(BrewItemsContext)
  const [brewItem, setBrewItems] = useState({})

  const editMode = props.match.params.hasOwnProperty("brewItemsId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newBrewItems = Object.assign({}, brewItem)
    newBrewItems[event.target.name] = event.target.value
    setBrewItems(newBrewItems)
  }

  const setDefaults = () => {
    if (editMode) {
      const brewItemId = parseInt(props.match.params.brewItemsId)
      const selectedBrewItems = brewItems.find(bi => bi.id === brewItemId) || {}
      setBrewItems(selectedBrewItems)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [brewItems])

  

  const constructNewBrewItems = () => {
    

    if (editMode) {
      editBrewItems({
        id: brewItem.id,
        name: brewItem.name,
        desc: brewItem.desc,
        rarity: brewItem.rarity,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/itemList"))
    } else {
      addBrewItems({
        id: brewItem.id,
        name: brewItem.name,
        desc: brewItem.desc,
        value: brewItem.value,
        rarity: brewItem.rarity,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/itemList"))
    }

  }

  return (
   
<div className="brewItemsContainer">
    <form className="brewItems__Form">
      <h2 className="brewItems__title">{editMode ? "Update Items" : "Add Items"}</h2>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="Items Name"
            defaultValue={brewItem.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="itemDesc">Description: </label>
          <input type="text" name="desc" required className="form-control"
            proptype="varchar"
            placeholder="Item Description"
            defaultValue={brewItem.desc}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
{/*  */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="itemDesc">Type: </label>
          <input type="text" name="type" required className="form-control"
            proptype="varchar"
            placeholder="Item Description"
            defaultValue={brewItem.type}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>


      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewBrewItems()
        }}
        className="btn btn-primary">
        {editMode ? "Save Item" : "Save Items"}
      </button>
    </form>
    </div>
  )
}
