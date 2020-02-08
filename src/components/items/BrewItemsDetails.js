import React, { useContext } from "react"
import { BrewItemsContext } from "./BrewItemsDataProvider"
import "./BrewItems.css"


export default (props) => {
  const { brewItems, deleteBrewItems } = useContext(BrewItemsContext)

  const chosenItemId = parseInt(props.match.params.brewItemsId, 10)

  const item = brewItems.find(i => i.id === chosenItemId) || {}


  return (
    <section className="brewItemsDetail">
      <h3 className="brewItemsDetail__name">{item.name}</h3>
      <div className="brewItemsDetail__description">{item.desc}</div>
      
      <button onClick={() => {
        props.history.push(`/brewery/itemList/edit/${item.id}`)
      }
      
      }>Edit</button>
  
      <button onClick={
        () => {
          
          deleteBrewItems(item)
            .then(() => {
              props.history.push("/brewery/itemList")
            })
        }
      }>Delete</button>

    
    
    
    
    </section>
    )
}
