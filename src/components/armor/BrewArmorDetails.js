import React, { useContext } from "react"
import { BrewArmorContext } from "./BrewArmorDataProvider"
import "./BrewArmor.css"


export default (props) => {
  const { brewArmor, deleteBrewArmor } = useContext(BrewArmorContext)

  const chosenArmorId = parseInt(props.match.params.brewArmorId, 10)

  const armor = brewArmor.find(i => i.id === chosenArmorId) || {}


  return (
    <section className="brewArmor__detail">
      <h3 className="brewArmor__name">{armor.name}</h3>
      <div className="brewArmor__type">{armor.type}</div>
      <div className="brewArmor__description">{armor.desc}</div>
      <br></br>
      <div className="brewArmorDetail__rarity">{armor.rarity}</div>
      
      
      <button onClick={() => {
        props.history.push(`/brewery/armorList/edit/${armor.id}`)
      }
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteBrewArmor(armor)
            .then(() => {
              props.history.push("/brewery/armorList")
            })
        }
      }>Delete</button>

    
    
    
    
    </section>
    )
}
