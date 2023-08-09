import Carousel from "react-bootstrap/Carousel";
import "../css/Home.css";
import { useState, useEffect } from "react";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=994bc6246884ded0516faec02291bfa2";

const style = {
  width: "800px",
};

const Home = () => {
  const api_img = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
            <p>{element.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}

      {/* <Carousel.Item>
        <img
          src="https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
          text="Second Movie"
          alt="Second Movie"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg"
          text="Third Movie"
          alt="Third Movie"
          className="h-100 w-100"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Home;
