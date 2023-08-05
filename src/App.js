import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Favourite from "./components/components/Favourite";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=994bc6246884ded0516faec02291bfa2";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const [favourites, setFavourites] = useState([]);

  const makeApiCall = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);
  // for search bar
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=994bc6246884ded0516faec02291bfa2&query=${query}`;
  const searchMovies = (e) => {
    console.log("Searching");
    e.preventDefault();
    try {
      fetch(searchUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        });
    } catch (e) {
      console.log(e);
    }
  };
  // try {
  //   searchMovies();
  // } catch (e) {
  //   console.log(e);
  // }

  const handleChange = (e) => {
    console.log("change is running");
    setQuery(e.target.value);
  };
  // useEffect(() => {
  //   searchMovies();
  // }, [query]);

  const cards = movies.map((element) => (
    <MovieCard
      key={element.id}
      poster={element.poster_path}
      title={element.title}
      overview={element.overview}
      releaseDate={element.release_date}
      voteAverage={element.vote_average}
    />
  ));
  return (
    <div className="App">
      <Navbar
        query={query}
        handleChange={handleChange}
        handleSubmit={searchMovies}
      />
      <Main />
      <div className="container">
        <div className="grid">{cards}</div>
        {/* <Favourite favourites={favourites} setFavourites={setFavourites} /> */}
      </div>
    </div>
  );
}

export default App;
