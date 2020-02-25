import React from "react"
import "./OpenMagicItems.css"
import { Link } from "react-router-dom"

export default ({ openMagicItem }) => (
    <section className="OpenMagicItems">
        <h3 className="open__magicItem">
            <Link className="openMagicItem__link" to={`/library/magicitems/${openMagicItem.slug}`}>
                { openMagicItem.name }
            </Link>
            
        </h3>
        
    </section>
)