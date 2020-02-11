import React, { useContext } from "react"
import { BrewMonstersContext } from "./BrewMonstersDataProvider"


export default (props) => {
  const { brewMonsters, deleteBrewMonsters } = useContext(BrewMonstersContext)
  


  const chosenMonsterId = parseInt(props.match.params.brewMonstersId, 10)

  const monster = brewMonsters.find(m => m.id === chosenMonsterId) || {}
  


  return (
    <section className="monster">
      <h3 className="monster__name">{monster.name}</h3>
      <div className="monster__size">{monster.size}</div>
      <div className="monster__type">{monster.type}</div>
      <div className="monster__alignment">{monster.alignment}</div>
      <div className="monster__armor_class">{monster.armor_class}</div>
      <div className="monster__hit_points">{monster.hit_points}</div>
      <div className="monster__speed">{monster.speed}</div>
      <div className="monster__strength">{monster.strength}</div>
      <div className="monster__dexterity">{monster.dexterity}</div>
      <div className="monster__constitution">{monster.constitution}</div>
      <div className="monster__intelligence">{monster.intelligence}</div>
      <div className="monster__wisdom">{monster.wisdom}</div>
      <div className="monster__charisma">{monster.charisma}</div>
      <div className="monster__description">{monster.desc}</div>
      <div className="monster__size">{monster.actions}</div>
      <div className="monster__size">{monster.abilities}</div>

      
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













