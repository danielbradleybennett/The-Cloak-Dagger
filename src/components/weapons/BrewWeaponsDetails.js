import React, { useContext } from "react"
import { BrewWeaponsContext } from "./BrewWeaponsDataProvider"
import "./BrewWeapons.css"


export default (props) => {
  const { brewWeapons, deleteBrewWeapons } = useContext(BrewWeaponsContext)

  const chosenWeaponId = parseInt(props.match.params.brewWeaponsId, 10)

  const weapon = brewWeapons.find(bw => bw.id === chosenWeaponId) || {}


  return (
    <section className="brewWeaponsDetail">
      <h3 className="brewWeaponsDetail__name">{weapon.name}</h3>
      <div className="brewWeaponsDetail__description">{weapon.type}</div>
      <div className="brewWeaponsDetail__description">{weapon.damage}</div>
      <div className="brewWeaponsDetail__description">{weapon.desc}</div>
      <div className="brewWeaponsDetail__description">{weapon.value}</div>
      <div className="brewWeaponsDetail__description">{weapon.rarity}</div>
      
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
