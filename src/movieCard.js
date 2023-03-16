import React from "react";
 const movieCard = ({movie}) =>{
    return(
        <div className="container">
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https://via.place'} alt={movie.Title}></img>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>


        </div>
    </div>  
    )
 }
 export default movieCard