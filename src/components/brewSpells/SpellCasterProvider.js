import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const SpellCasterContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const SpellCasterProvider = (props) => {
    const [spellCaster, setSpellCaster] = useState([])

    const getSpellCaster = () => {
        return fetch("http://localhost:8088/spellCaster")
            .then(res => res.json())
            .then(setSpellCaster)
    }

    const addSpellCaster = spellCaster => {
      return fetch("http://localhost:8088/spellCaster", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(spellCaster)
      })
          .then(getSpellCaster)
  }

  


   

    /*
        Load all Users when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getSpellCaster()
    }, [])

    // useEffect(() => {
    //     console.log("****  Users APPLICATION STATE CHANGED  ****")
        
    // }, [Users])

    return (
        <SpellCasterContext.Provider value={{
            spellCaster, addSpellCaster
        }}>
            {props.children}
        </SpellCasterContext.Provider>
    )
}