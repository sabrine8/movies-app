import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';


const ContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
 
 
 
 useEffect(() => {
  getMoviesRequest();
  }, []);

  const getMoviesRequest = async () => {
    const url = "http://www.omdbapi.com/?s=&{searchValue}&apikey=1646402a&&s=%22morning%22"
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson);
    setMovies(responseJson.Search)
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  const context = {
    movies,
    setMovies
  };
  
  return (<AppContext.Provider value={context}>
                       {children}
  </AppContext.Provider>);
};

export default  ContextProvider;
