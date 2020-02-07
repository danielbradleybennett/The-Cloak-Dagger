import React from "react"
import "./Notes.css"
import { Link } from "react-router-dom"

export default ({ note }) => (
    <section className="note__List">
        <h3 className="notesList__name">
            <Link to={`/vyasa/notesList/${note.id}`}>
                { note.name }
            </Link>
            
        </h3>
        
    </section>
)