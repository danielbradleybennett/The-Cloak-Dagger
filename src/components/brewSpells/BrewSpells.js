import React from "react"
import "./BrewSpells.css"
import { Link } from "react-router-dom"

export default ({ brewSpell }) => (
    <section className="brewSpells">
        <h3 className="brew__spell">
            <Link className="spells__link" to={`/brewery/spellList/${brewSpell.id}`}>
                { brewSpell.name }
            </Link>
            
        </h3>
        
    </section>
)
