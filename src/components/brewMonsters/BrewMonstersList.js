import React, { useContext } from "react"
import { BrewMonstersContext } from "./BrewMonstersDataProvider"
import BrewMonsters from "./BrewMonsters"

import "./BrewMonsters.css"

export default (props) => {

    const { brewMonsters } = useContext(BrewMonstersContext)

    return (
      <>
        <button onClick={
        () => props.history.push("/brewery/monsterList/create")}>
        New Monster
        </button>
       
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