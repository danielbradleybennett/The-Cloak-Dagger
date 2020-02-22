import React, { useContext } from "react"
import { BrewWeaponsContext } from "./BrewWeaponsDataProvider"
import BrewWeapons from "./BrewWeapons"
import "./BrewWeapons.css"


export default (props) => {

  const { brewWeapons } = useContext(BrewWeaponsContext)
  const currentUserId = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserWeapons = brewWeapons.filter(weapon => weapon.userId === currentUserId)
  console.log(currentUserWeapons)
  
  
    
    return (

      <>
        <button className="newWeapon__button btn btn-light btn-sm" onClick={
        () => props.history.push("/brewery/weaponList/create")}>
        New Weapon
        </button>

        <div className="brewWeapons__container">
          {
            currentUserWeapons.map(weapon => {
              
              return <BrewWeapons key={weapon.id} weapon={weapon} />
            })
          }

        
        </div>

      </>

    )
  

}