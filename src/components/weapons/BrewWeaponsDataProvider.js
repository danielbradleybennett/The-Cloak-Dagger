import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BrewWeaponsContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BrewWeaponsProvider = (props) => {
    const [brewWeapons, setBrewWeapons] = useState([])

    const getBrewWeapons = () => {
        return fetch("http://localhost:8088/brewWeapons")
            .then(res => res.json())
            .then(setBrewWeapons)
    }

    const deleteBrewWeapons = brewWeapons => {
      return fetch(`http://localhost:8088/brewWeapons/${brewWeapons.id}`, {
          method: "DELETE"
      })
          .then(getBrewWeapons)
  }


  const editBrewWeapons = brewWeapons => {
    return fetch(`http://localhost:8088/brewWeapons/${brewWeapons.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(brewWeapons)
    })
        .then(getBrewWeapons)
}


    const addBrewWeapons = brewWeapons => {
        return fetch("http://localhost:8088/brewWeapons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewWeapons)
        })
            .then(getBrewWeapons)
    }

    /*
        Load all BrewWeapons when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBrewWeapons()
    }, [])

    // useEffect(() => {
    //     console.log("****  BrewWeapons APPLICATION STATE CHANGED  ****")
        
    // }, [BrewWeapons])

    return (
        <BrewWeaponsContext.Provider value={{
            brewWeapons, addBrewWeapons, deleteBrewWeapons, editBrewWeapons
        }}>
            {props.children}
        </BrewWeaponsContext.Provider>
    )
}