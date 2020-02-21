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
      const selectedTheWorld = theWorld.find(w => w.id === theWorldId) || {}
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

    <div className="world__container">
      <form className="world__form">
        <h2 className="theWorld__title">{editMode ? "Update The World" : "Add The World"}</h2>

        
          <div className="form-group">
            <label htmlFor="name">World Title: </label>
            <input type="text" name="title" required autoFocus className="form-control world__title"
              proptype="varchar"
              placeholder="The World Title"
              defaultValue={world.title}
              onChange={handleControlledInputChange}
            />
          </div>
      

        
          <div className="form-group">
            <label htmlFor="theWorldDesc">World Description: </label>
            <textarea rows="100" type="text" name="desc" required autoFocus className="form-control world__desc"
              proptype="varchar"
              placeholder="World Description"
              defaultValue={world.desc}
              onChange={handleControlledInputChange}>
            </textarea>
            
          </div>
       

        <button type="submit"
          onClick={evt => {
            evt.preventDefault()
            constructNewTheWorld()
          }}
          className="btn btn-primary">
          {editMode ? "Save Updates" : "Save The World"}
        </button>
      </form>
    </div>
  )
}
