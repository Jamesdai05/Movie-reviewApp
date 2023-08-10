import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=994bc6246884ded0516faec02291bfa2";
const api_img = "https://image.tmdb.org/t/p/w500";

const Popular = () => {
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopulars(data.results);
      });
  }, []);

  const cards = populars.map((element) => (
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
      <h1>Popular</h1>
      {populars.length > 0 ? (
        <div className="container">
          <div className="grid">{cards}</div>
        </div>
      ) : (
        <h1>Results are not found!Please check the enter is correct.</h1>
      )}
    </>
  );
};

export default Popular;
