import React, { useState, useContext, useEffect } from "react";
import { MonstersContext } from "../monsters/MonstersDataProvider";


export default (props) => {

  const {monsters} = useContext(MonstersContext)
  const [monster, setMonsters] = useState({})
  const [searchValue, setSearchValue] = useState("");
  
  



  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    
  }, [monsters])

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {debugger
  
  const searchValue = e.current.value
debugger
  const foundMonsters = monsters.filter(monster => {
    if (monster.name.includes(searchValue))
      {return monster} 
  })
  

  e.preventDefault();
  props.search(searchValue);
  resetInputField();
console.log(searchValue)
}
    
    
    
  

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={ 
          // () => {if(evt.target.value === evt.target.name)
        callSearchFunction} 
        
       type="submit" value="SEARCH" />
       
          
          
      </form>
    );
}

