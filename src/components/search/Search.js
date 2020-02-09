import React, { useState, useContext, useEffect } from "react";
import { MonstersContext } from "../monsters/MonstersDataProvider";



export default (props) => {

  const {monsters} = useContext(MonstersContext)
  const [monster, setMonsters] = useState({})
  const [searchValue, setSearchValue] = useState("");
  


  const searchOpenMonsters = (searchValue) => {
    return fetch(`https://api.open5e.com/search/?limit=999999&route=monsters&text=${searchValue}`)
        .then(res => res.json())
        .then(console.log)
        
}



  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    
  }, [monsters])

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
  
  const searchValue = e.current.value

  searchOpenMonsters(searchValue)



//   const foundMonsters = monsters.filter(monster => {
//     if (monster.name.includes(searchValue))
//       {return monster} 
//   })
  

//   e.preventDefault();
//   props.search(searchValue);
//   resetInputField();
// console.log(searchValue)
}
    
    
    
  

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={ (e) => {
          e.preventDefault()
          console.log(e)
          callSearchFunction(e)} 


        }
          
        
       type="submit" value="SEARCH" />
       
          
          
      </form>
    );
}

