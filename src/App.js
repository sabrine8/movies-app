import React, {useState,useEffect} from 'react';

import './App.css';
const App = () => {
  const [movies, setMovies] = useState([])
  
 
  useEffect(()=> {
    getMoviesRequest()
    console.log('rrrr '+ JSON.stringify(movies))
  },[])
  const getMoviesRequest = async () => {
    const url = "http://www.omdbapi.com/?s=&{searchValue}&apikey=1646402a&&s=%22morning%22"
    const response = await fetch(url)
    const responseJson = await response.json()
    setMovies(responseJson.Search)
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }
  return (
    <div className="App">
      <h1>custom React </h1>
   
      {movies.length}
    </div>
  );
}

export default App;
