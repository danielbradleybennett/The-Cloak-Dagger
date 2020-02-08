import React, { useContext } from "react"
import { BrewItemsContext } from "./BrewItemsDataProvider"
import BrewItems from "./BrewItems"
import "./BrewItems.css"


export default (props) => {

  const { brewItems } = useContext(BrewItemsContext)
  const currentUserId = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserItems = brewItems.filter(item => item.userId === currentUserId)
  
  
  
    
    return (

      <>
        <button onClick={
        () => props.history.push("/brewery/itemList/create")}>
        New Item
        </button>

        <div className="items">
          {
            currentUserItems.map(item => {
              
              return <BrewItems key={item.id} item={item} />
            })
          }

        
        </div>

      </>

    )
  

}