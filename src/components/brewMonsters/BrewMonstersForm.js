import React, { useContext, useState, useEffect } from "react"
import { BrewMonstersContext } from "./BrewMonstersDataProvider"



export default props => {
  
  const { addBrewMonsters, brewMonsters, editBrewMonsters } = useContext(BrewMonstersContext)
  const [brewMonster, setBrewMonsters] = useState({})

  const editMode = props.match.params.hasOwnProperty("brewMonstersId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newBrewMonsters = Object.assign({}, brewMonster)
    newBrewMonsters[event.target.name] = event.target.value
    setBrewMonsters(newBrewMonsters)
  }

  const setDefaults = () => {
    if (editMode) {
      const brewMonstersId = parseInt(props.match.params.brewMonstersId)
      const selectedBrewMonsters = brewMonsters.find(bs => bs.id === brewMonstersId) || {}
      setBrewMonsters(selectedBrewMonsters)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [brewMonsters])

  

  const constructNewBrewMonsters = () => {
    

    if (editMode) {
      editBrewMonsters({
        id: brewMonster.id,
        name: brewMonster.name,
        desc: brewMonster.desc,
        armor: brewMonster.armor,
        hitpoints: brewMonster.hitpoints,
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/monsterList"))
    } else {
      addBrewMonsters({
        id: brewMonster.id,
        name: brewMonster.name,
        desc: brewMonster.desc,
        armor: brewMonster.armor,
        hitpoints: brewMonster.hitpoints,
        userId: parseInt(localStorage.getItem("currentUserId")),
        
      })
        .then(() => props.history.push("/brewery/monsterList"))
    }

  }

  return (
   
<div className="BrewMonstersContainer">
    <form className="BrewMonstersBrewMonsters">
      <h2 className="BrewMonstersBrewMonsters__title">{editMode ? "Update BrewMonsters" : "Add BrewMonsters"}</h2>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Monster Name: </label>
          <input type="text" name="name" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="BrewMonsters name"
            defaultValue={brewMonster.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="MonsterDesc">Monster Description: </label>
          <input type="text" name="desc" required className="form-control"
            proptype="varchar"
            placeholder="Monster Description"
            defaultValue={brewMonster.desc}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>


      <fieldset>
        <div className="form-group">
          <label htmlFor="hitpoints">Monster Hitpoints: </label>
          <input type="text" name="hitpoints" className="form-control"
            proptype="integer"
            placeholder="hitpoints"
            defaultValue={brewMonster.hitpoints}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="MonsterType">Armor Class </label>
          <input type="text" name="armor" className="form-control"
            proptype="varchar"
            placeholder="Armor Class"
            value={brewMonster.armor}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>
{/* fill out later */}
      {/* <fieldset>
        <div className="form-group">
          <label htmlFor="MonsterCasterType">Monster Caster Type: </label>
          <input type="text" name="MonsterCasterType" className="form-control"
            proptype="varchar"
            placeholder="MonsterCasterType"
            value={brewMonster.MonsterCasterType}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="MonsterRange">Monster Range: </label>
          <input type="text" name="MonsterRange" className="form-control"
            proptype="varchar"
            placeholder="MonsterRange"
            value={brewMonster.MonsterRange}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="MonsterDuration">Monster Duration: </label>
          <input type="text" name="MonsterDuration" className="form-control"
            proptype="varchar"
            placeholder="MonsterDuration"
            value={brewMonster.MonsterDuration}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset> */}






      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewBrewMonsters()
        }}
        className="btn btn-primary">
        {editMode ? "Save Updates" : "Save BrewMonsters"}
      </button>
    </form>
    </div>
  )
}
