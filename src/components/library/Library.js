import React, {useState, useContext, useEffect} from "react";
import Search from "../search/Search";

import OpenSpellsList from "./OpenSpellsList";
import OpenMonstersList from "../monsters/OpenMonstersList";




export default (props) => {

  const [searchType, setSearchType] = useState("monsters")
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState({count:0, results:[]})



  const searchOpen5e = (searchText, searchType) => {
    console.log(`https://api.open5e.com/search/?limit=999999&route=${searchType}&text=${searchText}`)
    return fetch(`https://api.open5e.com/search/?limit=999999&route=${searchType}&text=${searchText}`)
      .then(res => res.json())
      .then(setSearchResults)

  }
  

  const handleSubmit = (searchText,searchType) => {
    
    setSearchText(searchText)
    setSearchType(searchType)
    searchOpen5e(searchText, searchType)





  }

const renderList = (searchType, searchResults) => {
  let component = null;
  console.log(searchResults)
  switch (searchType) {
    case "monsters":
      component= <OpenMonstersList monsters={searchResults.results}/>
      break;
    case "spells":
      component = <OpenSpellsList spells={searchResults.results}/>
      break;
    default:
      component =  null;
      break;
  }
  return component;
}

return (
  <div>
    <Search handleSubmit={handleSubmit}/>
{/* <h2>Number Results: {searchResults.count}</h2> */}
    {/* <p>
      {JSON.stringify(searchResults)}
      </p> */}

      {
        renderList(searchType, searchResults)
      }







  </div>











)















}