import React, { useContext } from "react"
import { BrewArmorContext } from "./BrewArmorDataProvider"
import "./BrewArmor.css"


export default (props) => {
  const { brewArmor, deleteBrewArmor } = useContext(BrewArmorContext)

  const chosenArmorId = parseInt(props.match.params.brewArmorId, 10)

  const armor = brewArmor.find(i => i.id === chosenArmorId) || {}


  return (
    <section className="brewArmorDetail">
      <h3 className="brewArmorDetail__name">{armor.name}</h3>
      <div className="brewArmorDetail__type">{armor.type}</div>
      <div className="brewArmorDetail__description">{armor.desc}</div>
      <br></br>
      <div className="brewArmorDetail__rarity">{armor.rarity}</div>
      <div className="brewArmorDetail__value">{armor.value}</div>
      
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
