import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";

const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`;
// const api_img = "https://image.tmdb.org/t/p/w500";

const Trending = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTrendings(data.results);
      });
  }, []);

  const cards = trendings.map((element) => (
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
    <>
      <h1>Trending</h1>
      {trendings.length > 0 ? (
        <div className="container">
          <div className="grid">{cards}</div>
        </div>
      ) : (
        <h1>Results are loading...</h1>
      )}
    </>
  );
};

export default Trending;
