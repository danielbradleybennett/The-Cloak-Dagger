import React from "react"
import "./OpenConditions.css"
import { Link } from "react-router-dom"

export default ({ openCondition }) => (
    <section className="OpenConditions">
        <h3 className="open__conditions">
            <Link className="conditions__link" to={`/library/conditions/${openCondition.slug}`}>
                { openCondition.name }
            </Link>
            
        </h3>
        
    </section>
)