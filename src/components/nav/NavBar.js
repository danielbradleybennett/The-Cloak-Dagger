import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/library">The Library</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/brewery">The Brewery</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/vyasa">Vyasa</Link>
            </li>

            {
                localStorage.getItem("currentUserId")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
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
    )

}
