import React from "react"
import "./BrewArmor.css"
import { Link } from "react-router-dom"

export default ({ armor }) => (
    <section className="brewArmor">
        <h3 className="brewArmorList__name">
            <Link className="brewArmor__link" to={`/brewery/armorList/${armor.id}`}>
                { armor.name }
            </Link>
            
        </h3>
        
    </section>
)