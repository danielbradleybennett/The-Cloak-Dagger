import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const SpellTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const SpellTypeProvider = (props) => {
    const [spellType, setSpellType] = useState([])

    const getSpellType = () => {
        return fetch("http://localhost:8088/spellType")
            .then(res => res.json())
            .then(setSpellType)
    }

    const addSpellType = spellType => {
      return fetch("http://localhost:8088/spellType", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(spellType)
      })
          .then(getSpellType)
  }

  


   

    /*
        Load all Users when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getSpellType()
    }, [])

    // useEffect(() => {
    //     console.log("****  Users APPLICATION STATE CHANGED  ****")
        
    // }, [Users])

    return (
        <SpellTypeContext.Provider value={{
            spellType, addSpellType
        }}>
            {props.children}
        </SpellTypeContext.Provider>
    )
}