import React, { useContext } from "react"
import { BrewArmorContext } from "./BrewArmorDataProvider"
import BrewArmor from "./BrewArmor"
import "./BrewArmor.css"


export default (props) => {

  const { brewArmor } = useContext(BrewArmorContext)
  const currentUserId = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserArmor = brewArmor.filter(armor => armor.userId === currentUserId)
  
  
  
    
    return (

      <>
        <button onClick={
        () => props.history.push("/brewery/armorList/create")}>
        New Armor
        </button>

        <div className="brewArmor__container">
          {
            currentUserArmor.map(armor => {
              
              return <BrewArmor key={armor.id} armor={armor} />
            })
          }

        
        </div>

      </>

    )
  

}