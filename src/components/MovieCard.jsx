const api_img = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({
  title,
  vote_average,
  overview,
  release_date,
  poster_path,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={api_img + poster_path} alt="movie" />
      <p>{overview}</p>
      <p>
        <span>{release_date}</span>
      </p>
    </div>
  );
};

export default MovieCard;
