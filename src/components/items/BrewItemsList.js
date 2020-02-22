import React, { useContext } from "react"
import { BrewItemsContext } from "./BrewItemsDataProvider"
import BrewItems from "./BrewItems"
import "./BrewItems.css"
import {Button} from "react-bootstrap"


export default (props) => {

  const { brewItems } = useContext(BrewItemsContext)
  const currentUserId = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserItems = brewItems.filter(item => item.userId === currentUserId)
  
  
  
    
    return (

      <>
        <Button className="button__item btn btn-light btn-sm" onClick={
        () => props.history.push("/brewery/itemList/create")}>
        New Item
        </Button>

        <div className="brewItems__container">
          {
            currentUserItems.map(item => {
              
              return <BrewItems key={item.id} item={item} />
            })
          }

        
        </div>

      </>

    )
  

}