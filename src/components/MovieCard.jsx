const api_img = "https://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  console.log(props.poster);
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={api_img + props.poster} alt="movie" />
      <p>{props.overview}</p>
      <p>
        <span>{props.release_date}</span>
        <span>{props.vote_average}</span>
      </p>
    </div>
  );
};

export default MovieCard;
