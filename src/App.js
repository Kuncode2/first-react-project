import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'


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
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
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
                    value="superman"
                    onChange={() => { }}
                ></input>
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => { }}>
                </img>
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{Movie1.Year}</p>
                    </div>

                    <div>
                        <img src={Movie1.Poster !== 'N/A' ? Movie1.Poster: 'https://via.place'} alt={Movie1.Title}></img>
                    </div>


                </div>
            </div>
        </div>
    );
};
export default App;
