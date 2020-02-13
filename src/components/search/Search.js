import React, { useState} from "react";




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

      </select>
      <form onSubmit={handleSubmit}>
        <input name="searchText"
          defaultValue={searchText}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </div>



  );
}

