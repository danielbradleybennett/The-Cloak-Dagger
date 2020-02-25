import React, { useState, useContext, useEffect } from "react";
import Search from "../search/Search";

import OpenSpellsList from "../spells/OpenSpellsList";
import OpenMonstersList from "../monsters/OpenMonstersList";
import OpenConditionsList from "../conditions/OpenConditionsList";
import OpenWeaponsList from "../weapons/OpenWeaponsList"
import OpenMagicItemsList from "../magic-items/OpenMagicItemsList";
import OpenRacesList from "../races/OpenRacesList";
import OpenClassesList from "../classes/OpenClassesList";





export default (props) => {

  const [searchType, setSearchType] = useState("monsters")
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState({ count: 0, results: [] })



  const searchOpen5e = (searchText, searchType) => {
    console.log(`https://api.open5e.com/search/?limit=999999&route=${searchType}&text=${searchText}`)
    return fetch(`https://api.open5e.com/search/?limit=999999&route=${searchType}&text=${searchText}`)
      .then(res => res.json())
      .then(setSearchResults)

  }


  const handleSubmit = (searchText, searchType) => {

    setSearchText(searchText)
    setSearchType(searchType)
    searchOpen5e(searchText, searchType)





  }

  const renderList = (searchType, searchResults) => {
    let component = null;
    console.log(searchResults)
    switch (searchType) {
      case "monsters":
        component = <OpenMonstersList monsters={searchResults.results} />
        break;
      case "spells":
        component = <OpenSpellsList spells={searchResults.results} />
        break;
      case "conditions":
        component = <OpenConditionsList conditions={searchResults.results} />
        break;
      case "weapons":
        component = <OpenWeaponsList weapons={searchResults.results} />
        break;
      case "magicItems":
        component = <OpenMagicItemsList magicItems={searchResults.results} />
        break;
      case "races":
        component = <OpenRacesList races={searchResults.results} />
        break;
      case "classes":
        component = <OpenClassesList classes={searchResults.results} />
        break;
    }
    return component;
  }

  return (
    <div>
      <Search handleSubmit={handleSubmit} />

      {
        renderList(searchType, searchResults)
      }







    </div>











  )















}