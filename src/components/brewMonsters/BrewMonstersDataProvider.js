import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BrewMonstersContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BrewMonstersProvider = (props) => {
    const [brewMonsters, setBrewMonsters] = useState([])

    const getBrewMonsters = () => {
        return fetch("http://localhost:8088/brewMonsters")
            .then(res => res.json())
            .then(setBrewMonsters)
    }

    const deleteBrewMonsters = brewMonsters => {
      return fetch(`http://localhost:8088/brewMonsters/${brewMonsters.id}`, {
          method: "DELETE"
      })
          .then(getBrewMonsters)
  }


  const editBrewMonsters = brewMonsters => {
    return fetch(`http://localhost:8088/brewMonsters/${brewMonsters.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(brewMonsters)
    })
        .then(getBrewMonsters)
}


    const addBrewMonsters = brewMonsters => {
        return fetch("http://localhost:8088/brewMonsters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewMonsters)
        })
            .then(getBrewMonsters)
    }

    /*
        Load all BrewMonsters when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBrewMonsters()
    }, [])

    // useEffect(() => {
    //     console.log("****  BrewMonsters APPLICATION STATE CHANGED  ****")
        
    // }, [BrewMonsters])

    return (
        <BrewMonstersContext.Provider value={{
            brewMonsters, addBrewMonsters, deleteBrewMonsters, editBrewMonsters
        }}>
            {props.children}
        </BrewMonstersContext.Provider>
    )
}