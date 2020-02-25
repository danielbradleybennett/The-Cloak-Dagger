import React, { useState, useEffect } from "react"






export default (props) => {

  

  const monsterSlug = props.match.params.monsterSlug

  const [monster, setMonster] = useState({})
  
  useEffect(()=>{
    fetch(`https://api.open5e.com/monsters/${monsterSlug}`)
      .then(res => res.json())
      .then(setMonster)
  }, [])
  
  const genActions = (monster) => {
    console.log(`monster.actions = ${monster.actions}`)
    if (monster.actions){
      return monster.actions.map(action => 
        <>
          <div>{action.name}</div>
          
          <div>{action.desc}:</div>
        </>
      )
    }
  }

  return (
    <section className="monster">
      <h3 className="monster__name">{monster.name}</h3>
      <div className="monster__type"></div>
      <div className="monster__range">{monster.type}, {monster.size}</div>
      <div className="monster__description">{monster.desc}</div>
      <div className="monster__caster">{monster.alignment}</div>
      <div className="monster__hit_points">HP{monster.hit_points}</div>
      <div className="monster__armor_class">AC: {monster.armor_class}</div>
      {/* <div className="monster__speed">{monster.speed}</div> */}
      <div className="monster__strength">Strength{monster.strength}</div>
      <div className="monster__dexterity">Dexterity: {monster.dexterity}</div>
      <div className="monster__constitution">Constitution: {monster.constitution}</div>
      <div className="monster__intelligence">Intelligence: {monster.intelligence}</div>
      <div className="monster__wisdom">Wisdom: {monster.wisdom}</div>
      <div className="monster__charisma">Charisma: {monster.charisma}</div>
      <div className="monster__perception">Passive Perception: {monster.perception}</div>
      {/* <div className="monster__skills">{monster.skills}</div> */}
      <div className="monster__damage_vulnerabilities">{monster.damage_vulnerabilities}</div>
      <div className="monster__damage_resistances">{monster.damage_resistances}</div>
      <div className="monster__condition_immunities">{monster.condition_immunities}</div>
      <div className="monster__senses">{monster.senses}</div>
      <div className="monster__languages">Languages:{monster.languages}</div>
      <div className="monster__challenge_rating">CR:{monster.challenge_rating}</div>
      <br></br>
     
      <div className="monster__duration">
        {genActions(monster)}
      </div>
      
      <div className="monster__reactions">{monster.reactions}</div>
      {/* <div className="monster__legendary_desc">{monster.legendary_desc}</div>
      <div className="monster__legendary_actions">{monster.legendary_actions}</div>
      <div className="monster__special_abilities">{monster.special_abilities}</div>
      <div className="monster__spell_list">{monster.spell_list}</div> */}
    </section>
    )
  }
  
 