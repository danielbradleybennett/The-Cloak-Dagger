import React, { useContext, useState, useEffect } from "react"
import { NotesContext } from "./NotesDataProvider"



export default props => {
  
  const { addNotes, notes, editNotes } = useContext(NotesContext)
  const [note, setNotes] = useState({})

  const editMode = props.match.params.hasOwnProperty("notesId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newNotes = Object.assign({}, note)
    newNotes[event.target.name] = event.target.value
    setNotes(newNotes)
  }

  const setDefaults = () => {
    if (editMode) {
      const notesId = parseInt(props.match.params.notesId)
      const selectedNotes = notes.find(bs => bs.id === notesId) || {}
      setNotes(selectedNotes)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [notes])

  

  const constructNewNotes = () => {
    

    if (editMode) {
      editNotes({
        id: note.id,
        name: note.name,
        desc: note.desc,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/vyasa/notesList"))
    } else {
      addNotes({
        id: note.id,
        name: note.name,
        desc: note.desc,
        
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/vyasa/notesList"))
    }

  }

  return (
   
<div className="notes__container">
    <form className="notes__form">
      <h2 className="NotesNotes__title">{editMode ? "Update Notes" : "Add Notes"}</h2>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="Notes Name"
            defaultValue={note.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="noteDesc">Description: </label>
          <textarea type="text" name="desc" required className="form-control notes--description"
            proptype="varchar"
            placeholder="Note Description"
            defaultValue={note.desc}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>


      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewNotes()
        }}
        className="btn btn-primary">
        {editMode ? "Save Updates" : "Save Notes"}
      </button>
    </form>
    </div>
  )
}
