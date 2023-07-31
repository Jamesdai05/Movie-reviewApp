const Moviepage = (props) => {
  const movieList = props.movies.map((movie, index) => {
    return (
      <div>
        <img src={movie.Poster} alt="movie" />
      </div>
    );
  });

  return <>{movieList}</>;
};

export default Moviepage;
