import React, { useContext } from "react"
import { NotesContext } from "./NotesDataProvider"
// import "./Notes.css"


export default (props) => {
  const { notes, deleteNotes } = useContext(NotesContext)

  const chosenNoteId = parseInt(props.match.params.notesId, 10)

  const note = notes.find(n => n.id === chosenNoteId) || {}


  return (
    <section className="notesDetail">
      <h3 className="notesDetail__name">{note.name}</h3>
      <div className="notesDetail__description">{note.desc}</div>
      
      <button onClick={() => {
        props.history.push(`/vyasa/notesList/edit/${note.id}`)
      }
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteNotes(note)
            .then(() => {
              props.history.push("/vyasa/notesList")
            })
        }
      }>Delete</button>

    
    
    
    
    </section>
    )
}
