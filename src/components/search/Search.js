import React, { useState } from "react";
import {Button} from "react-bootstrap"




export default (props) => {


  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("monsters")


  const handleSearchTypeChange = (event) => {
    const data = event.target.value
    console.log(data)
    setSearchType(data)
  }


  const handleSearchInputChanges = (e) => {
    setSearchText(e.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit(searchText, searchType)

  }




  return (
    <div>
      <select onChange={handleSearchTypeChange} value={searchType}>
        <option value="monsters">Monsters</option>
        <option value="spells">Spells</option>
        <option value="weapons">Weapons</option>
        <option value="magicItems">Magic Items</option>
        <option value="races">Races</option>
        <option value="classes">Classes</option>
        <option value="conditions">Conditions</option>

      </select>
      <form onSubmit={handleSubmit}>
        <input className="search--field" name="searchText"
          defaultValue={searchText}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <button className="search--button" type="submit">Search</button>
        
      </form>
    </div>



  );
}

