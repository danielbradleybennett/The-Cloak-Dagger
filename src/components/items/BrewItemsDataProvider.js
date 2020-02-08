import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BrewItemsContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BrewItemsProvider = (props) => {
    const [brewItems, setBrewItems] = useState([])

    const getBrewItems = () => {
        return fetch("http://localhost:8088/brewItems")
            .then(res => res.json())
            .then(setBrewItems)
    }

    const deleteBrewItems = brewItems => {
      return fetch(`http://localhost:8088/brewItems/${brewItems.id}`, {
          method: "DELETE"
      })
          .then(getBrewItems)
  }


  const editBrewItems = brewItems => {
    return fetch(`http://localhost:8088/brewItems/${brewItems.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(brewItems)
    })
        .then(getBrewItems)
}


    const addBrewItems = brewItems => {
        return fetch("http://localhost:8088/brewItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewItems)
        })
            .then(getBrewItems)
    }

    /*
        Load all BrewItems when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBrewItems()
    }, [])

    // useEffect(() => {
    //     console.log("****  BrewItems APPLICATION STATE CHANGED  ****")
        
    // }, [BrewItems])

    return (
        <BrewItemsContext.Provider value={{
            brewItems, addBrewItems, deleteBrewItems, editBrewItems
        }}>
            {props.children}
        </BrewItemsContext.Provider>
    )
}