import React, {useState,useEffect,useContext} from 'react';
import Header from './components/Header';
import './App.css';
import SearchBox from './components/SearchBox';
import MultipleSelect from './components/MultipleSelect';
import MovieCards from './components/MovieCards';


import ContextProvider  from "./AppContext/ContextProvider"
const App = () => {
  
  return (<ContextProvider>

      <Header/>
    
     <SearchBox/>
    
     <MultipleSelect/>
    <div className='row'>
      <MovieCards />
    </div>  


    

    </ContextProvider>
  );
}

export default App;
