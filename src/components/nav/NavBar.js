import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS The Tavern</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/library">The Library</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/brewery">The Brewery</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/tales">The Teller of Tales</Link>
            </li>
        </ul>
    )
}
