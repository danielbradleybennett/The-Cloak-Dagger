import React, { useContext } from "react"
import { BrewMonstersContext } from "./BrewMonstersDataProvider"
import BrewMonsters from "./BrewMonsters"

import "./BrewMonsters.css"

export default () => {

    const { brewMonsters } = useContext(BrewMonstersContext)

    return (
      <>
       
        <div className="brewMonsters">
        {
            brewMonsters.map(brewMonster => {
                return <BrewMonsters key={brewMonster.id} brewMonster={brewMonster} />
            })
        }
        </div>
    </>
    
    )
}