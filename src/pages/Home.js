import React, { useState} from 'react';

import SearchBox from '../components/SearchBox';
import MultipleSelect from '../components/MultipleSelect';
import MovieCards from '../components/MovieCards';




const Home = () => {
    return (
        <div>
           
            <SearchBox />
            <MultipleSelect />
            <div className='row'>
                <MovieCards />
            </div>
        </div>
    );
}

export default Home;