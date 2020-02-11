import React, { useState, useEffect } from "react"






export default (props) => {

  

  const monsterSlug = props.match.params.monsterSlug

  const [monster, setMonster] = useState({actions:[]})
  
  useEffect(()=>{
    fetch(`https://api.open5e.com/monsters/${monsterSlug}`)
      .then(res => res.json())
      .then(setMonster)
  }, [])
  
  console.log(monster.actions)
  
// monster.actions.forEach(actionObj => {
//         Object.keys(actionObj).forEach((key, index) => 
//         {console.log(key, actionObj[key])

//       })}) 
  
  console.log(monster.actions, "this is the monster")

  return (
    <section className="monster">
      <h3 className="monster__name">{monster.name}</h3>
      <div className="monster__type">{monster.size}</div>
      <div className="monster__range">{monster.type}</div>
      <div className="monster__description">{monster.desc}</div>
      <div className="monster__caster">{monster.alignment}</div>
      
     
      <div className="monster__duration">
        {monster.actions.map(action => 
          <>
            <div>{action.desc}</div>
              <div>{action.name}</div>
          </>
    )}
    </div>
    </section>
    )
  }
  
 