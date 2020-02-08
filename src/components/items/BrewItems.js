import React from "react"
import "./BrewItems.css"
import { Link } from "react-router-dom"

export default ({ item }) => (
    <section className="items">
        <h3 className="itemsList__name">
            <Link to={`/brewery/itemList/${item.id}`}>
                { item.name }
            </Link>
            
        </h3>
        
    </section>
)