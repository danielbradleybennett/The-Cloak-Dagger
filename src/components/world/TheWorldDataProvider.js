import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const TheWorldContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const TheWorldProvider = (props) => {
    const [theWorld, setTheWorld] = useState([])

    const getTheWorld = () => {
        return fetch("http://localhost:8088/theWorld")
            .then(res => res.json())
            .then(setTheWorld)
    }

    const deleteTheWorld = theWorldId => {
      return fetch(`http://localhost:8088/TheWorld/${theWorld.id}`, {
          method: "DELETE"
      })
          .then(getTheWorld)
  }


  const editTheWorld = theWorld => {
    return fetch(`http://localhost:8088/TheWorld/${theWorld.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(theWorld)
    })
        .then(getTheWorld)
}


    const addTheWorld = theWorld => {
        return fetch("http://localhost:8088/theWorld", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(theWorld)
        })
            .then(getTheWorld)
    }

    /*
        Load all TheWorld when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getTheWorld()
    }, [])

    // useEffect(() => {
    //     console.log("****  TheWorld APPLICATION STATE CHANGED  ****")
        
    // }, [TheWorld])

    return (
        <TheWorldContext.Provider value={{
            theWorld, addTheWorld, deleteTheWorld, editTheWorld
        }}>
            {props.children}
        </TheWorldContext.Provider>
    )
}