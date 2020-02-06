import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const WorldbuildingContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const WorldbuildingProvider = (props) => {
    const [worldbuilding, setWorldbuilding] = useState([])

    const getWorldbuilding = () => {
        return fetch("http://localhost:8088/worldbuilding")
            .then(res => res.json())
            .then(setWorldbuilding)
    }

    const deleteWorldbuilding = worldbuildingId => {
      return fetch(`http://localhost:8088/worldbuilding/${worldbuildingId}`, {
          method: "DELETE"
      })
          .then(getWorldbuilding)
  }


  const editWorldbuilding = worldbuilding => {
    return fetch(`http://localhost:8088/worldbuilding/${worldbuilding.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(worldbuilding)
    })
        .then(getWorldbuilding)
}


    const addWorldbuilding = worldbuilding => {
        return fetch("http://localhost:8088/Worldbuilding", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(worldbuilding)
        })
            .then(getWorldbuilding)
    }

    /*
        Load all Worldbuilding when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getWorldbuilding()
    }, [])

    // useEffect(() => {
    //     console.log("****  Worldbuilding APPLICATION STATE CHANGED  ****")
        
    // }, [Worldbuilding])

    return (
        <WorldbuildingContext.Provider value={{
            worldbuilding, addWorldbuilding, deleteWorldbuilding, editWorldbuilding
        }}>
            {props.children}
        </WorldbuildingContext.Provider>
    )
}