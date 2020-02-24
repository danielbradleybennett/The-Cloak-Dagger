import React, { useContext } from "react"
import { BrewWeaponsContext } from "./BrewWeaponsDataProvider"
import "./BrewWeapons.css"


export default (props) => {
  const { brewWeapons, deleteBrewWeapons } = useContext(BrewWeaponsContext)

  const chosenWeaponId = parseInt(props.match.params.brewWeaponsId, 10)

  const weapon = brewWeapons.find(bw => bw.id === chosenWeaponId) || {}


  return (
    <section className="brewWeapons__detail">
      <h3 className="brewWeapons__name">{weapon.name}</h3>
      <div className="brewWeapons__type">Type: {weapon.type}</div>
      <div className="brewWeapons__rarity">Rarity: {weapon.rarity}</div>
      <div className="brewWeapons__damage">Damage: {weapon.damage}</div>
      <div className="brewWeapons__description">{weapon.desc}</div>
      <br></br>
      
      
      <button onClick={() => {
        props.history.push(`/brewery/weaponList/edit/${weapon.id}`)
      }
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteBrewWeapons(weapon)
            .then(() => {
              props.history.push("/brewery/weaponList")
            })
        }
      }>Delete</button>

    
    
    
    
    </section>
    )
}
