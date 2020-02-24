import React, { Fragment, useContext, useState, useEffect } from "react"
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
        speed: brewMonster.speed,
        alignment: brewMonster.alignment,
        armor_class: brewMonster.armor_class,
        hit_points: brewMonster.hit_points,
        strength: brewMonster.strength,
        dexterity: brewMonster.dexterity,
        constitution: brewMonster.constitution,
        intelligence: brewMonster.intelligence,
        wisdom: brewMonster.wisdom,
        charisma: brewMonster.charisma,
        desc: brewMonster.abilities,
        actions: brewMonster.actions,
        // abilities: brewMonster.abilities,
        userId: parseInt(localStorage.getItem("currentUserId")),
      })
        .then(() => props.history.push("/brewery/monsterList"))
    } else {
      addBrewMonsters({
        id: brewMonster.id,
        name: brewMonster.name,
        type: brewMonster.type,
        size: brewMonster.size,
        speed: brewMonster.speed,
        alignment: brewMonster.alignment,
        armor_class: brewMonster.armor_class,
        hit_points: brewMonster.hit_points,
        strength: brewMonster.strength,
        dexterity: brewMonster.dexterity,
        constitution: brewMonster.constitution,
        intelligence: brewMonster.intelligence,
        wisdom: brewMonster.wisdom,
        charisma: brewMonster.charisma,
        desc: brewMonster.abilities,
        actions: brewMonster.actions,
        // abilities: brewMonster.abilities,

        userId: parseInt(localStorage.getItem("currentUserId")),

      })
        .then(() => props.history.push("/brewery/monsterList"))
    }

  }

  return (

    <div className="brewMonsters__container">
      <form className="brewMonsters__form">
        <br></br>
        <h2 className="BrewMonstersBrewMonsters__title">{editMode ? "Update Monster" : "Brew Monster"}</h2>

        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Monster Name: </label>
            <input type="text" name="name" required autoFocus className="form-control"
              proptype="varchar"
              placeholder="Monsters Name"
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
            <label htmlFor="monster_type">Type: </label>
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
              defaultValue={brewMonster.hit_points}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="monster_speed">Speed: </label>
            <input type="text" name="speed" required className="form-control"
              proptype="varchar"
              placeholder="Speed"
              defaultValue={brewMonster.speed}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>


        <fieldset>
          <div className="form-group">
            <label htmlFor="strength">Strength: </label>
            <input type="text" name="strength" className="form-control"
              proptype="integer"
              placeholder="Strength"
              defaultValue={brewMonster.strength}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="dexterity">Dexterity </label>
            <input type="text" name="dexterity" className="form-control"
              proptype="varchar"
              placeholder="Dexterity"
              value={brewMonster.dexterity}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="constitution">Constitution </label>
            <input type="text" name="constitution" className="form-control"
              proptype="varchar"
              placeholder="Constitution"
              value={brewMonster.constitution}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="intelligence">Intelligence </label>
            <input type="text" name="intelligence" className="form-control"
              proptype="varchar"
              placeholder="Intelligence"
              value={brewMonster.intelligence}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="wisdom">Wisdom </label>
            <input type="text" name="wisdom" className="form-control"
              proptype="varchar"
              placeholder="Wisdom"
              value={brewMonster.wisdom}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="charisma">Charisma </label>
            <input type="text" name="charisma" className="form-control"
              proptype="varchar"
              placeholder="Charisma"
              value={brewMonster.charisma}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="abilities">Abilities</label>
            <textarea type="text" name="abilities" className="form-control brewMonster--abilities"
              proptype="varchar"
              placeholder="Abilities"
              value={brewMonster.abilities}
              onChange={handleControlledInputChange}>
            </textarea>
          </div>
        </fieldset>

        <fieldset lassName="actions ">
          <div className="form-group ">
            <label htmlFor="actions">Actions </label>
            <textarea type="text" name="actions" className="form-control brewMonster--actions"
              proptype="varchar"
              placeholder="Actions"
              value={brewMonster.actions}
              onChange={handleControlledInputChange}>
            </textarea>
          </div>
        </fieldset>

       
        <button type="submit"
          onClick={evt => {
            evt.preventDefault()
            constructNewBrewMonsters()
          }}
          className="btn btn-primary">
          {editMode ? "Save Update" : "Save Monster"}
        </button>
      </form>
    </div>
  )
}
