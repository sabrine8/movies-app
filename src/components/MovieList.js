import React from "react";

const MovieList = (props) => {
    const favouriteComponent = props.favouriteComponent
    return(
        <>
        {props.movies.map((movie, index)=>{
            <div className="image-container d-flex justify-content-star">
                <img src={movie.Poster} alt='movie'></img>
                <div onClick={props.handleFavouritesClick(movie)} classeName="overlay d-fex align-items-center justify-content">
                    <favouriteComponent/>
                </div>
            </div>
        })

        }
        </>
    )


}
export default MovieList