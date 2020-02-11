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
        <button onClick={
        () => props.history.push("/brewery/weaponList/create")}>
        New Weapon
        </button>

        <div className="weapons">
          {
            currentUserWeapons.map(weapon => {
              
              return <BrewWeapons key={weapon.id} weapon={weapon} />
            })
          }

        
        </div>

      </>

    )
  

}