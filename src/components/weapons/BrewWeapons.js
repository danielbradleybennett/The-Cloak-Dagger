import React from "react"
import "./BrewWeapons.css"
import { Link } from "react-router-dom"

export default ({ weapon }) => (
    <section className="weapons">
        <h3 className="weaponsList__name">
            <Link className="brewWeapons__link"to={`/brewery/weaponList/${weapon.id}`}>
                { weapon.name }
            </Link>
            
        </h3>
        
    </section>
)