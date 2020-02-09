import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const MonstersContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const MonstersProvider = (props) => {
    const [monsters, setMonsters] = useState([])

    const getMonsters = () => {
        return fetch("https://api.open5e.com/monsters/?limit=1086")
            .then(res => res.json())
            .then(setMonsters)
    }

 

  


   

    /*
        Load all Monsters when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getMonsters()
    }, [])

    // useEffect(() => {
    //     console.log("****  Monsters APPLICATION STATE CHANGED  ****")
        
    // }, [Monsters])

    return (
        <MonstersContext.Provider value={{
            monsters
        }}>
            {props.children}
        </MonstersContext.Provider>
    )
}