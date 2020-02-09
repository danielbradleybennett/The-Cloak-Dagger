import React, { useState, useEffect } from "react";

import Search from "./Search";


const monsterApi = "https://api.open5e.com/monsters/?limit=1086"; // you should replace this with yours


const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(monsterApi)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://api.open5e.com/monsters/?limit=1086`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMonsters(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  	};

    
  //   return (
  //    <div className="App">
  //     <Header text="HOOKED" />
  //     <Search search={search} />
  //     <p className="App-intro">Sharing a few of our favourite movies</p>
  //     <div className="movies">
  //       {loading && !errorMessage ? (
  //        <span>loading...</span>
  //        ) : errorMessage ? (
  //         <div className="errorMessage">{errorMessage}</div>
  //       ) : (
  //         movies.map((movie, index) => (
  //           <Movie key={`${index}-${movie.Title}`} movie={movie} />
  //         ))
  //       )}
  //     </div>
  //   </div>
  // );
};


export default SearchData;