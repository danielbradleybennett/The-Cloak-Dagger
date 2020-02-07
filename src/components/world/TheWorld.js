import React from "react"
import "./TheWorld.css"
import { Link } from "react-router-dom"

export default ({ world }) => (
    <section className="worldList">
        <h3 className="worldList__name">
            <Link to={`/vyasa/theWorldList/${world.id}`}>
                { world.name }
            </Link>
            
        </h3>
        
    </section>
)