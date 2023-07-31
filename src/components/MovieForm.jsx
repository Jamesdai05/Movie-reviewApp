import { useRef } from "react";

const MovieForm = (props) => {
  const movieRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const movieName = movieRef.current.value;
    props.onSubmit(movieName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Movie Title:</label>
      <input type="text" name="movie" ref={movieRef} />
    </form>
  );
};

export default MovieForm;
