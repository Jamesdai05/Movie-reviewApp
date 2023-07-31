import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
// import MovieForm from "./components/MovieForm";
// import MovieDisplay from "./components/MovieDisplay";
import Moviepage from "./components/Moviepage";

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

  // const getMovieRequest = async () => {
  //   const url = `http://www.omdbapi.com/?s={movieName}&apikey=91cda3b7`;

  //   const response = await fetch(url);
  //   const data = await response.json();

  //   console.log(data);
  // };

  // useEffect(() => {
  //   if (movieName !== "") getMovieRequest();
  // }, [movieName]);

  useEffect(() => {
    // const url = `http://www.omdbapi.com/?i={movieName}&apikey=91cda3b7`;
    const url = "http://www.omdbapi.com/?s=avengers&type=movie&apikey=91cda3b7";

    const makeApiCall = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
        });
    };
    if (movieName !== "") makeApiCall();
  }, [movieName]);
  return (
    <div className="App">
      <Header />
      {/* <Moviepage moviedata={moviedata} movietitle={movietitle} /> */}
      <div className="movie">
        <h1>My Movie App</h1>
        {/* <MovieForm onSubmit={onSubmit} /> */}
        <Moviepage movies={movies} />
      </div>
    </div>
  );
}

export default App;
