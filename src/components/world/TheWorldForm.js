import React, { useContext, useState, useEffect } from "react"
import { TheWorldContext } from "./TheWorldDataProvider"



export default props => {
  
  const { addTheWorld, theWorld, editTheWorld } = useContext(TheWorldContext)
  const [world, setTheWorld] = useState({})

  const editMode = props.match.params.hasOwnProperty("theWorldId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newTheWorld = Object.assign({}, world)
    newTheWorld[event.target.name] = event.target.value
    setTheWorld(newTheWorld)
  }

  const setDefaults = () => {
    if (editMode) {
      const theWorldId = parseInt(props.match.params.theWorldId)
      const selectedTheWorld = world.find(w => w.id === theWorldId) || {}
      setTheWorld(selectedTheWorld)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [theWorld])

  

  const constructNewTheWorld = () => {
    

    if (editMode) {
      editTheWorld({
        id: world.id,
        title: world.title,
        desc: world.desc,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/vyasa/worldList"))
    } else {
      addTheWorld({
        id: world.id,
        title: world.title,
        desc: world.desc,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/vyasa/worldList"))
    }

  }

  return (
   
<div className="theWorldContainer">
    <form className="theWorldTheWorld">
      <h2 className="theWorldTheWorld__title">{editMode ? "Update TheWorld" : "Add TheWorld"}</h2>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">World Title: </label>
          <input type="text" name="title" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="The World Title"
            defaultValue={world.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="theWorldDesc">World Description: </label>
          <input type="text" name="desc" required className="form-control"
            proptype="varchar"
            placeholder="World Description"
            defaultValue={world.desc}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>


      {/* <fieldset>
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
      </fieldset> */}






      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewTheWorld()
        }}
        className="btn btn-primary">
        {editMode ? "Save Updates" : "Save TheWorld"}
      </button>
    </form>
    </div>
  )
}
