import React from "react"
import "./BrewItems.css"
import { Link } from "react-router-dom"

export default ({ item }) => (
    <section className="brewItems">
        <h3 className="itemsList__name">
            <Link className="brewItems__link" to={`/brewery/itemList/${item.id}`}>
                { item.name }
            </Link>
            
        </h3>
        
    </section>
)