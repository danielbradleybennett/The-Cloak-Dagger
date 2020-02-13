import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const SpellSpellCasterContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const SpellSpellCasterProvider = (props) => {
    const [spellSpellCaster, setSpellSpellCaster] = useState([])

    const getSpellSpellCaster = () => {
        return fetch("http://localhost:8088/spellSpellCaster?_expand=spellCaster")
            .then(res => res.json())
            .then(setSpellSpellCaster)
    }

    const addSpellSpellCaster = spellSpellCaster => {
      return fetch("http://localhost:8088/spellSpellCaster", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(spellSpellCaster)
      })
          .then(getSpellSpellCaster)
  }

  


   

    /*
        Load all Users when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getSpellSpellCaster()
    }, [])

    // useEffect(() => {
    //     console.log("****  Users APPLICATION STATE CHANGED  ****")
        
    // }, [Users])

    return (
        <SpellSpellCasterContext.Provider value={{
            spellSpellCaster, addSpellSpellCaster
        }}>
            {props.children}
        </SpellSpellCasterContext.Provider>
    )
}