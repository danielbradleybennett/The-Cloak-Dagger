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
        type: brewMonster.type, 
        size: brewMonster.size,
        alignment: brewMonster.alignment,
        armor_class: brewMonster.armor_class,
        hit_points: brewMonster.hit_points,
        strength: brewMonster.strength,
        dexterity: brewMonster.dexterity,
        constitution: brewMonster.constitution,
        intelligence: brewMonster.intelligence,
        wisdom: brewMonster.wisdom,
        charisma: brewMonster.charisma,
        desc: brewMonster.desc,
        actions: brewMonster.actions,
        abilities: brewMonster.abilities,
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/monsterList"))
    } else {
      addBrewMonsters({
        id: brewMonster.id,
        name: brewMonster.name,
        type: brewMonster.type, 
        size: brewMonster.size,
        alignment: brewMonster.alignment,
        armor_class: brewMonster.armor_class,
        hit_points: brewMonster.hit_points,
        strength: brewMonster.strength,
        dexterity: brewMonster.dexterity,
        constitution: brewMonster.constitution,
        intelligence: brewMonster.intelligence,
        wisdom: brewMonster.wisdom,
        charisma: brewMonster.charisma,
        desc: brewMonster.desc,
        actions: brewMonster.actions,
        abilities: brewMonster.abilities,
        
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
          <label htmlFor="monster_size">Size: </label>
          <input type="text" name="size" required className="form-control"
            proptype="varchar"
            placeholder="Monster Size"
            defaultValue={brewMonster.size}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="monster_type">Monster Type: </label>
          <input type="text" name="type" required className="form-control"
            proptype="varchar"
            placeholder="Monster Type"
            defaultValue={brewMonster.type}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="monster_alignment">Alignment: </label>
          <input type="text" name="alignment" required className="form-control"
            proptype="varchar"
            placeholder="Monster Alignment"
            defaultValue={brewMonster.alignment}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="monster_class">Armor Class: </label>
          <input type="text" name="armor_class" required className="form-control"
            proptype="varchar"
            placeholder="Monster Armor Class"
            defaultValue={brewMonster.armor_class}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="MonsterDesc">Hitpoints: </label>
          <input type="text" name="hit_points" required className="form-control"
            proptype="varchar"
            placeholder="Monster Hitpoints"
            defaultValue={brewMonster.hitpoints}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="monster_speed">Speed: </label>
          <input type="text" name="speed" required className="form-control"
            proptype="varchar"
            placeholder="Monster Speed"
            defaultValue={brewMonster.speed}
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
