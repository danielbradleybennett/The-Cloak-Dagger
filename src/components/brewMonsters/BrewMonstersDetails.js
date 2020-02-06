import React, { useContext } from "react"
import { BrewMonstersContext } from "./BrewMonstersDataProvider"


export default (props) => {
  const { brewMonsters, deleteBrewMonsters } = useContext(BrewMonstersContext)
  console.log(brewMonsters)


  const chosenMonsterId = parseInt(props.match.params.brewMonstersId, 10)

  const monster = brewMonsters.find(m => m.id === chosenMonsterId) || {}


  return (
    <section className="monster">
      <h3 className="monster__name">{monster.name}</h3>
      <div className="monster__description">{monster.desc}</div>
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













