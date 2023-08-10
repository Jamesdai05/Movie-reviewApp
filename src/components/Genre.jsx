import { Chip } from "@mui/material";
import { useEffect, useState } from "react";

const Genre = () => {
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=994bc6246884ded0516faec02291bfa2";

  const [genre, setGenre] = useState([]);
  const makeApiCall = () => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setGenre(data.genres);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    makeApiCall();
  }, [genre]);

  const genres = genre.map((ele) => (
    <Chip label={ele.name} key={ele.id} name={ele.name} color="secondary" />
  ));

  const style = {
    padding: "10px 0",
    margin: "1em",
    backgroundColor: "white",
  };

  return (
    <div className="container" style={{ style }}>
      {genres}
    </div>
  );
};

export default Genre;
