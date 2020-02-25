import React, { useState, useEffect } from "react"


export default (props) => {


  const weaponSlug = props.match.params.weaponSlug

  const [weapon, setWeapon] = useState({})
  
  useEffect(()=>{
    fetch(`https://api.open5e.com/weapons/${weaponSlug}`)
      .then(res => res.json())
      .then(setWeapon)
  }, [])
  
  return (
     <section className="weapon">
      <h3 className="weapon__name">{weapon.name}</h3>
     
    </section>
    )
  }