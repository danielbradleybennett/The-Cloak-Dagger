import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const SpellsContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const SpellsProvider = (props) => {
    const [spells, setSpells] = useState([])

    const getSpells = () => {
        return fetch("http://localhost:8088/spells")
            .then(res => res.json())
            .then(setSpells)
    }

 

  


   

    /*
        Load all Spells when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getSpells()
    }, [])

    // useEffect(() => {
    //     console.log("****  Spells APPLICATION STATE CHANGED  ****")
        
    // }, [Spells])

    return (
        <SpellsContext.Provider value={{
            spells
        }}>
            {props.children}
        </SpellsContext.Provider>
    )
}