import React, { useContext } from "react"
import { NotesContext } from "./NotesDataProvider"
import "./Notes.css"


export default (props) => {
  const { notes, deleteNotes } = useContext(NotesContext)

  const chosenNoteId = parseInt(props.match.params.notesId, 10)

  const note = notes.find(n => n.id === chosenNoteId) || {}


  return (
    <section className="notes__detail">
      <h3 className="notes__name">{note.name}</h3>
      <div className="notes__date">{note.date}</div>
      <div className="notes__description">{note.desc}</div>
      <br></br>
      <button onClick={() => {
        props.history.push(`/lore/notesList/edit/${note.id}`)
      }
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteNotes(note)
            .then(() => {
              props.history.push("/lore/notesList")
            })
        }
      }>Delete</button>

    
    
    
    
    </section>
    )
}
