import React, { useContext } from "react"
import OpenWeapons from "./OpenWeapons"
import "./OpenWeapons.css"


export default (props) => {
  
console.log(props.weapons)
    return (

      <>
        <div className="openWeapons__container">
          {
            props.weapons.map( openWeapon => {
              
              return <OpenWeapons key={openWeapon.slug} openWeapon={openWeapon} />

            })
          }
        </div>

      </>

    )
  

}