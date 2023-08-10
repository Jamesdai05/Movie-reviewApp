import { useState, useEffect } from "react";
import "./Search.css";
import MovieCard from "../../MovieCard";
import Genre from "../../Genre";

const Search = () => {
  const [query, setQuery] = useState("");
  const [resulsts, setResults] = useState([]);

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=994bc6246884ded0516faec02291bfa2&query=${query}`;

  const searchMovies = (e) => {
    console.log("Searching");
    e.preventDefault();
    try {
      fetch(searchUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setResults(data.results);
        });
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   searchMovies();
  // }, [query]);

  const cards = resulsts.map((element) => (
    <MovieCard
      key={element.id}
      poster={element.poster_path}
      title={element.title}
      overview={element.overview}
      releaseDate={element.release_date}
      voteAverage={element.vote_average}
    />
  ));

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h1>Movie Search</h1>
      <div>
        <Genre />
        <form className="searchbar" onSubmit={searchMovies}>
          <input
            type="text"
            name="movie search"
            value={query}
            placeholder="Enter the movie name"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {resulsts.length > 0 ? (
          <div className="container">
            <div className="grid">{cards}</div>
          </div>
        ) : (
          <div className="text-center">
            <h1>Please enter the name of the movie for searching.</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
