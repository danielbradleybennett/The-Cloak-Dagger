import React, { useContext } from "react"
import { BrewMonstersContext } from "./BrewMonstersDataProvider"


export default (props) => {
  const { brewMonsters, deleteBrewMonsters } = useContext(BrewMonstersContext)
  


  const chosenMonsterId = parseInt(props.match.params.brewMonstersId, 10)

  const monster = brewMonsters.find(m => m.id === chosenMonsterId) || {}
  


  return (
    <section className="monster">
      <h3 className="monster__name">{monster.name}</h3>
      <div className="monster__size">Size: {monster.size}</div>
      <div className="monster__type">Type: {monster.type}</div>
      <div className="monster__alignment">Alignment: {monster.alignment}</div>
      <div className="monster__armor_class">AC: {monster.armor_class}</div>
      <div className="monster__hit_points">HP: {monster.hit_points}</div>
      <div className="monster__speed">Speed: {monster.speed}</div>
      <div className="monster__strength">Strength: {monster.strength}</div>
      <div className="monster__dexterity">Dexterity: {monster.dexterity}</div>
      <div className="monster__constitution">Constitution: {monster.constitution}</div>
      <div className="monster__intelligence">Intelligence: {monster.intelligence}</div>
      <div className="monster__wisdom">Wisdom: {monster.wisdom}</div>
      <div className="monster__charisma">Charisma: {monster.charisma}</div>
      <div className="monster__description">Description: {monster.desc}</div>
      <div className="monster__size">Actions: {monster.actions}</div>
      <div className="monster__size">Abilities: {monster.abilities}</div>

      
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













