import React from "react";
import styled from "styled-components";
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

`

const SearchBox = (props) => {
    return (
        <StyledDiv>
              <h1>Search </h1>
            <StyledInput className="form-control" 
             value={props.value} 
             onChange={(event)=>props.setSearchValue(event.target.value)}
             placeholder="search">
            </StyledInput>

        </StyledDiv>
    )
}
export default SearchBox;