import React from "react"
import "./TheWorld.css"
import { Link } from "react-router-dom"

export default ({ world }) => (
    <section className="worldList">
        <h3 className="worldList__name">
            <Link to={`/vyasa/worldList/${world.id}`}>
                { world.title }
            </Link>
           
        </h3>
        
    </section>
)