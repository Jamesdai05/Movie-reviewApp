import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=994bc6246884ded0516faec02291bfa2";

function App() {
  // const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

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
      <Header />
      <Main />
      <div className="container">
        <div className="grid">{cards}</div>
      </div>
    </div>
  );
}

export default App;
