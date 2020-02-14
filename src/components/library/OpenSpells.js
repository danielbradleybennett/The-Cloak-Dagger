import React from "react"
import "./OpenSpells.css"
import { Link } from "react-router-dom"

export default ({ openSpell }) => (
    <section className="OpenSpells">
        <h3 className="open__spell">
            <Link className="openSpells__link" to={`/library/spells/${openSpell.slug}`}>
                { openSpell.name }
            </Link>
            
        </h3>
        
    </section>
)
