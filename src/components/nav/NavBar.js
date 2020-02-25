import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export default (props) => {
    return (
        <nav className="container">
        <ul className="navbar ">
            
            <li className="navbar__item">
                <Link className="navbar__link font-weight-bold" to="/library">The Library</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link font-weight-bold" to="/brewery">The Brewery</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link font-weight-bold" to="/lore">Lore</Link>
            </li>

            {
                localStorage.getItem("currentUserId")
                    ? <li className="navbar__item">
                        <Link className="navbar__link font-weight-bold"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("currentUserId")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""
                // what is this      ⬆
            }
        </ul>
        </nav>
    )

}
