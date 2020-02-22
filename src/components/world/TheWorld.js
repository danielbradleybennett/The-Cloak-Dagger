import React from "react"
import "./TheWorld.css"
import { Link } from "react-router-dom"

export default ({ world }) => (
    <section className="brewWorld">
        <h3 className="brewWorld__name">
            <Link className="theWorld__link"to={`/vyasa/worldList/${world.id}`}>
                { world.title }
            </Link>
           
        </h3>
        
    </section>
)