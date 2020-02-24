import React from "react"
import "./OpenClasses.css"
import { Link } from "react-router-dom"

export default ({ openClass }) => (
    <section className="OpenClasses">
        <h3 className="open__class">
            <Link className="openClasses__link" to={`/library/classes/${openClass.slug}`}>
                { openClass.name }
            </Link>
            
        </h3>
        
    </section>
)