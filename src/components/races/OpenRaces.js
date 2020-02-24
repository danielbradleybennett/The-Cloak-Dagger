import React from "react"
import "./OpenRaces.css"
import { Link } from "react-router-dom"

export default ({ openRace }) => (
    <section className="OpenRaces">
        <h3 className="open__races">
            <Link className="openRaces__link" to={`/library/races/${openRace.slug}`}>
                { openRace.name }
            </Link>
        </h3>
    </section>
)
