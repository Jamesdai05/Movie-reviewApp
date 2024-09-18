import Carousel from "react-bootstrap/Carousel";
import "../css/Home.css";
import { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const style = {
  width: "45vw",
  height: "93.5vh",
  overflow: "hidden",
  // marginTop: "2em",
};

const Home = () => {
  const api_img = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // const result = data.slice(1, 6);
        setMovies(data.results.slice(1, 11));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // const style={height:80%}

  return (
    <Carousel className="carousel-container">
      {movies.map((element) => (
        <Carousel.Item key={element.id}>
          <img
            style={style}
            src={api_img + element.poster_path}
            text="First Movie"
            alt="First Movie"
          />
          <Carousel.Caption className="container-description">
            <h3>{element.title}</h3>
            {/* <p>{element.overview}</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Home;
