import React, { useContext } from "react"
import { NotesContext } from "./NotesDataProvider"
import Notes from "./Notes"
import "./Notes.css"


export default (props) => {
  
  const { notes } = useContext(NotesContext)
console.log(notes)
  
    
    return (

      <>
        <button onClick={
        () => props.history.push("/vyasa/notesList/create")}>
        New Note
        </button>

        <div className="notesList">
          {
            notes.map(note => {
              
              return <Notes key={note.id} note={note} />
            })
          }

        
        </div>

      </>

    )
  

}