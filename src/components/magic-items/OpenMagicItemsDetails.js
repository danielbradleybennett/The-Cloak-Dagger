import React, { useState, useEffect } from "react"


export default (props) => {

  
  const magicItemSlug = props.match.params.magicItemSlug

  const [magicItem, setMagicItem] = useState({})
  
  useEffect(()=>{
    fetch(`https://api.open5e.com/magicitems/${magicItemSlug}`)
      .then(res => res.json())
      .then(setMagicItem)
  }, [])
  
  
  return (
    <section className="magicItems">
      <h3 className="openMagicItems__name">{magicItem.name}</h3>
     
    </section>
    )
}