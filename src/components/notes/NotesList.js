import React, { useContext } from "react"
import { NotesContext } from "./NotesDataProvider"
import Notes from "./Notes"
import "./Notes.css"


export default (props) => {
  
  const { notes } = useContext(NotesContext)
console.log(notes)
  
    
    return (

      <>
        <button className="note--button" onClick={
        () => props.history.push("/lore/notesList/create")}>
        New Note
        </button>

        <div className="notes__container">
          {
            notes.map(note => {
              
              return <Notes key={note.id} note={note} />
            })
          }

        
        </div>

      </>

    )
  

}