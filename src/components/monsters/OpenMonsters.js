import React from "react"
import "./OpenMonsters.css"
import { Link } from "react-router-dom"

export default ({ openMonster }) => (
    <section className="OpenMonsters">
        <h3 className="open__monsters">
            <Link to={`/library/monsters/${openMonster.slug}`}>
                { openMonster.name }
            </Link>
            
        </h3>
        
    </section>
)
