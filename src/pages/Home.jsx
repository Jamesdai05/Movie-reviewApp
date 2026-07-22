import Carousel from "react-bootstrap/Carousel";
import "../components/css/Home.css";
import { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const Home = () => {
    const api_img = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);
    // const style={overflow:"hidden"}

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results.slice(1, 11));
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="home-wrapper">
            <Carousel className="carousel-container">
                {movies.map((element) => (
                    <Carousel.Item key={element.id}>
                        <img
                            src={api_img + element.poster_path}
                            text="First Movie"
                            alt="First Movie"
                        />
                        <Carousel.Caption className="container-description">
                            <h3>{element.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Home;
