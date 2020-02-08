import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BrewArmorContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BrewArmorProvider = (props) => {
    const [brewArmor, setBrewArmor] = useState([])

    const getBrewArmor = () => {
        return fetch("http://localhost:8088/brewArmor")
            .then(res => res.json())
            .then(setBrewArmor)
    }

    const deleteBrewArmor = brewArmor => {
      return fetch(`http://localhost:8088/brewArmor/${brewArmor.id}`, {
          method: "DELETE"
      })
          .then(getBrewArmor)
  }


  const editBrewArmor = brewArmor => {
    return fetch(`http://localhost:8088/brewArmor/${brewArmor.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(brewArmor)
    })
        .then(getBrewArmor)
}


    const addBrewArmor = brewArmor => {
        return fetch("http://localhost:8088/brewArmor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewArmor)
        })
            .then(getBrewArmor)
    }

    /*
        Load all BrewArmor when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBrewArmor()
    }, [])

    // useEffect(() => {
    //     console.log("****  BrewArmor APPLICATION STATE CHANGED  ****")
        
    // }, [BrewArmor])

    return (
        <BrewArmorContext.Provider value={{
            brewArmor, addBrewArmor, deleteBrewArmor, editBrewArmor
        }}>
            {props.children}
        </BrewArmorContext.Provider>
    )
}