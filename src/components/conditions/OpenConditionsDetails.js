import React, { useState, useEffect } from "react"






export default (props) => {

  

  const conditionSlug = props.match.params.conditionSlug

  const [condition, setCondition] = useState({})
  
  useEffect(()=>{
    fetch(`https://api.open5e.com/conditions/${conditionSlug}`)
      .then(res => res.json())
      .then(setCondition)
  }, [])
  
  return (
     <section className="spell">
      <h3 className="spell__name">{condition.name}</h3>
     
    </section>
    )
  }