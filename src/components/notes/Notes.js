import React from "react"
import "./Notes.css"
import { Link } from "react-router-dom"

export default ({ note }) => (
    <section className="brewNotes">
        <h3 className="notesList__name">
            <Link className="notes__link"to={`/lore/notesList/${note.id}`}>
                { note.name }
                <br></br>
                {note.date}
            </Link>
            
        </h3>
        
    </section>
)