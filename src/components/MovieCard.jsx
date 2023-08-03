const api_img = "https://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  console.log(props.poster);
  return (
    <div className="text-center card bg-secondary mb-3">
      <div className="card-body">
        <div className="card-img-top">
          <img src={api_img + props.poster} alt="movie" />
          <div className="card-body">
            <button type="button" className="btn btn-dark">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
