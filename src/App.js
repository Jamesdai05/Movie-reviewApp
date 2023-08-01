import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
// import MovieForm from "./components/MovieForm";
// import MovieDisplay from "./components/MovieDisplay";

import Moviepage from "./components/Moviepage";
import MovieCard from "./components/MovieCard";
import data from "./components/data";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=994bc6246884ded0516faec02291bfa2";

// const url = "http://www.omdbapi.com/?s=avengers&type=movie&apikey=91cda3b7";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // const onSubmit = (movieName) => {
  //   console.log("onSubmit");

  //   //validation
  //   if (movieName === "") {
  //     setMovieName("");
  //     setErrorMessage("Please enter an valid name");
  //   } else {
  //     setMovieName(movieName);
  //     setErrorMessage("");
  //   }
  //   setMovies(null);
  // };

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

  // useEffect(() => {
  //   if (movieName !== "") getMovieRequest();
  // }, [movieName]);
  /////////////////////////////////////////////below is the code from course material.
  // useEffect(() => {
  //   // const url = `http://www.omdbapi.com/?i={movieName}&apikey=91cda3b7`;
  //   const url = "http://www.omdbapi.com/?s=avengers&type=movie&apikey=91cda3b7";

  //   const makeApiCall = () => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMovies(data);
  //       });
  //   };
  //   if (movieName !== "") makeApiCall();
  // }, [movieName]);

  const cards = movies.map((movie) => (
    <MovieCard
      key={movie.id}
      posterPath={movie.poster_path}
      title={movie.title}
      overview={movie.overview}
      release_date={movie.release_date}
      vote_average={movie.vote_average}
    />
  ));
  return (
    <div className="App">
      <Header />
      {/* <Moviepage moviedata={moviedata} movietitle={movietitle} /> */}
      <div className="movie">
        <h1>My Movie App</h1>
        {/* <MovieForm onSubmit={onSubmit} /> */}
        {cards}
      </div>
    </div>
  );
}

export default App;
