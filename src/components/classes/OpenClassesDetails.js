import React, { useState, useEffect } from "react"


export default (props) => {

  
  const classSlug = props.match.params.classSlug

  const [classes, setClass] = useState({})
  
  useEffect(()=>{
    fetch(`https://api.open5e.com/classes/${classSlug}`)
      .then(res => res.json())
      .then(setClass)
  }, [])
  
  
  return (
    <section className="classes">
      <h3 className="openClasses__name">{classes.name}</h3>
     
    </section>
    )
}