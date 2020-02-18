import React, { useContext } from "react"
import { BrewMonstersContext } from "./BrewMonstersDataProvider"
import BrewMonsters from "./BrewMonsters"

import "./BrewMonsters.css"

export default (props) => {

    const { brewMonsters } = useContext(BrewMonstersContext)
    const currentUserId = parseInt(localStorage.getItem("currentUserId"), 10)
    const currentUserMonsters = brewMonsters.filter(monster => monster.userId === currentUserId)


    return (
        <>
            <button onClick={
                () => props.history.push("/brewery/monsterList/create")}>
                New Monster
        </button>

            <div className="brewMonsters__container">
                {
                    currentUserMonsters.map(brewMonster => {
                        return <BrewMonsters key={brewMonster.id} brewMonster={brewMonster} />
                    })
                }
            </div>
        </>

    )
}