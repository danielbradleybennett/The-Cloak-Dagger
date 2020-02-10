import React, { useContext } from "react"
import OpenMonsters from "./OpenMonsters"
import "./OpenMonsters.css"


export default (props) => {
  

  
    console.log(props.monsters)
    return (

      <>
        

        <div className="OpenMonsters">
          {
            props.monsters.map( openMonster => {
              
              return <OpenMonsters key={openMonster.slug} openMonster={openMonster} />

            })
          }
        </div>

      </>

    )
  

}



























