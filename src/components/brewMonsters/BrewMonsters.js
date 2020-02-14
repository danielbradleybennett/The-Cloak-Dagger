import React from "react"
import "./BrewMonsters.css"
import { Link } from "react-router-dom"


export default ({ brewMonster }) => (
    <section className="brewMonsters">
        <h3 className="brew__monster">
            <Link className="brewMonsters__link" to={`/brewery/monsterList/${brewMonster.id}`}>
                { brewMonster.name }
            </Link>
        </h3>
        
    </section>
)