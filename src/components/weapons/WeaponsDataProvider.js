import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const NotesContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NotesProvider = (props) => {
    const [notes, setNotes] = useState([])

    const getNotes = () => {
        return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then(setNotes)
    }

    const deleteNotes = notes => {
      return fetch(`http://localhost:8088/notes/${notes.id}`, {
          method: "DELETE"
      })
          .then(getNotes)
  }


  const editNotes = notes => {
    return fetch(`http://localhost:8088/notes/${notes.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(notes)
    })
        .then(getNotes)
}


    const addNotes = notes => {
        return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(notes)
        })
            .then(getNotes)
    }

    /*
        Load all Notes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getNotes()
    }, [])

    // useEffect(() => {
    //     console.log("****  Notes APPLICATION STATE CHANGED  ****")
        
    // }, [Notes])

    return (
        <NotesContext.Provider value={{
            notes, addNotes, deleteNotes, editNotes
        }}>
            {props.children}
        </NotesContext.Provider>
    )
}