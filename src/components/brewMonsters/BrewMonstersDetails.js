import React, { useContext } from "react"
import { BrewMonstersContext } from "./BrewMonstersDataProvider"


export default (props) => {
  const { brewMonsters, deleteBrewMonsters } = useContext(BrewMonstersContext)
  


  const chosenMonsterId = parseInt(props.match.params.brewMonstersId, 10)

  const monster = brewMonsters.find(m => m.id === chosenMonsterId) || {}
  


  return (
    <section className="brewMonster">
      <h3 className="brewMonster__name">{monster.name}</h3>
      <div className="brewMonster__size">{monster.type}, {monster.size}</div>
      <div className="brewMonster__alignment">{monster.alignment}</div>
      <div className="brewMonster__armor_class">AC: {monster.armor_class}</div>
      <div className="brewMonster__hit_points">HP: {monster.hit_points}</div>
      <div className="brewMonster__speed">Speed: {monster.speed}</div>
      <div className="brewMonster__strength">Strength: {monster.strength}</div>
      <div className="brewMonster__dexterity">Dexterity: {monster.dexterity}</div>
      <div className="brewMonster__constitution">Constitution: {monster.constitution}</div>
      <div className="brewMonster__intelligence">Intelligence: {monster.intelligence}</div>
      <div className="brewMonster__wisdom">Wisdom: {monster.wisdom}</div>
      <div className="brewMonster__charisma">Charisma: {monster.charisma}</div>
      <br></br>
      <div className="brewMonster__abilities">Abilities: {monster.abilities}</div>
      <div className="brewMonster__actions">Actions: {monster.actions}</div>
      

      <br></br>
      <button onClick={() => {
        props.history.push(`/brewery/monsterList/edit/${monster.id}`)
      }
      }>Edit</button>
      
      <button onClick={
        () => {

          deleteBrewMonsters(monster)
            .then(() => {
              props.history.push("/brewery/monsterList")
            })
        }
      }>Delete</button>

    </section>
  )
}













