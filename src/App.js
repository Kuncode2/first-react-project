import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./movieCard";


const API_URL = 'http://www.omdbapi.com?apikey=7c82ba9f';

const Movie1 =
{
    "Title": "Spiderman in Cannes",
    "Year": "2016",
    "imdbID": "tt5978586",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}>
                </img>
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {
                                movies.map((movie) => (
                                    <MovieCard movie={movie} key={movie.imdbID} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movie found</h2>
                        </div>
                    )
            }
        </div>
    );
};
export default App;