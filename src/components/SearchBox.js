import React , { useState, useContext } from "react";
import styled from "styled-components";
import AppContext from "../AppContext/AppContext";
const StyledDiv = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction:column;
   margin:2px;
`
const StyledInput = styled.input`
  width:250px;
  height:30px;
  border-radius:15px;
  padding-left:20px;

`

const SearchBox = (props) => {
const [ searchValue, setSearchValue]  = useState("");
const { movies,setMovies}  = useContext(AppContext);
   
const getMoviesRequest = async (value) => {
    const url = `https://www.omdbapi.com/?apikey=1646402a&s=${searchValue}`
   
    const response = await fetch(url)
    const responseJson = await response.json()

    console.log(responseJson);
    if (responseJson.Search) {
        setMovies(responseJson.Search)
      }
   
  }

 function onChangeHandler (event ){
     if(event.key === 'Enter' && searchValue !== ''){
       getMoviesRequest(searchValue)
     }
 }
    return (
        <StyledDiv>
              <h1>Search </h1>
            <StyledInput className="form-control" 
             value={searchValue} 
             onChange={(e)=> setSearchValue(e.target.value)}
             onKeyDown={(e)=>onChangeHandler(e)}
             placeholder="search">
            </StyledInput>

        </StyledDiv>
    )
}
export default SearchBox;