import React from "react"
import "./OpenWeapons.css"
import { Link } from "react-router-dom"

export default ({ openWeapon }) => (
    <section className="OpenWeapons">
        <h3 className="open__weapons">
            <Link className="openWeapons__link" to={`/library/weapons/${openWeapon.slug}`}>
                { openWeapon.name }
            </Link>
            
        </h3>
        
    </section>
)