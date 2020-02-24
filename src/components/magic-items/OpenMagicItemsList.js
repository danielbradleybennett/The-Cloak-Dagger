import React, { useContext } from "react"
import OpenMagicItems from "./OpenMagicItems"
import "./OpenMagicItems.css"


export default (props) => {
 
    return (

      <>
        

        <div className="openMagicItems__container">
          {
            props.magicItems.map( openMagicItem => {
        
              return <OpenMagicItems key={openMagicItem.slug} openMagicItem={openMagicItem} />

            })
          }
        </div>

      </>

    )
  

}