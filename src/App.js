import React from 'react';
import Header from './components/Header';
import './App.css';

import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ContextProvider  from "./AppContext/ContextProvider"
import MovieDetails from './pages/MovieDetails';

const App = () => {
  return (<ContextProvider>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie" element={<MovieDetails />} />
    </Routes>
    </BrowserRouter>


 


    

    </ContextProvider>
  );
}

export default App;
