import React, { useState, useEffect } from "react"






export default (props) => {

  

  const spellSlug = props.match.params.spellSlug

  const [spell, setSpell] = useState({})
  
  useEffect(()=>{
    fetch(`https://api.open5e.com/spells/${spellSlug}`)
      .then(res => res.json())
      .then(setSpell)
  }, [])
  
  
  

  
  

  return (
    <section className="spell">
      <h3 className="spell__name">{spell.name}</h3>
      <div className="spell__type">{spell.school}</div>
      <div className="spell__range">{spell.range}</div>
      <div className="spell__description">{spell.desc}</div>
      <div className="spell__caster">{spell.dnd_class}</div>
      <div className="spell__duration">{spell.duration}</div>
    </section>
    )
}
