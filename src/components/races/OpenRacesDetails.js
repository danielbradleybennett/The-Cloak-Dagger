import React, { useState, useEffect } from "react"


export default (props) => {

  
  const raceSlug = props.match.params.raceSlug

  const [race, setRace] = useState({})
  
  useEffect(()=>{
    fetch(`https://api.open5e.com/races/${raceSlug}`)
      .then(res => res.json())
      .then(setRace)
  }, [])
  
  
  return (
    <section className="races">
      <h3 className="openRaces__name">{race.name}</h3>
     
    </section>
    )
}