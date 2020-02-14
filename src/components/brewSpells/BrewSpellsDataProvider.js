import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BrewSpellsContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BrewSpellsProvider = (props) => {
    const [brewSpells, setBrewSpells] = useState([])

    const getBrewSpells = () => {
        return fetch("http://localhost:8088/brewSpells")
            .then(res => res.json())
            .then(setBrewSpells)
    }

    const deleteBrewSpells = brewSpells => {
      return fetch(`http://localhost:8088/brewSpells/${brewSpells.id}`, {
          method: "DELETE"
      })
          .then(getBrewSpells)
  }


  const editBrewSpells = brewSpells => {
    return fetch(`http://localhost:8088/brewSpells/${brewSpells.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(brewSpells)
    })
        .then(getBrewSpells)
}


    const addBrewSpells = brewSpells => {
        return fetch("http://localhost:8088/brewSpells", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewSpells)
        })
            .then((result) => result.json())
           
        }
       

    /*
        Load all BrewSpells when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBrewSpells()
    }, [])

    // useEffect(() => {
    //     console.log("****  BrewSpells APPLICATION STATE CHANGED  ****")
        
    // }, [BrewSpells])

    return (
        <BrewSpellsContext.Provider value={{
            brewSpells, addBrewSpells, deleteBrewSpells, editBrewSpells, getBrewSpells
        }}>
            {props.children}
        </BrewSpellsContext.Provider>
    )
}