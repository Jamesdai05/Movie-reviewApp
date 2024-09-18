import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import ReactPaginate from "react-paginate";
import axios from "axios";

// const apiKey = process.env.REACT_APP_API_KEY;
// const token = process.env.REACT_API_TOKEN;
// const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
//base of the poster and image.
const api_img = "https://image.tmdb.org/t/p/w500";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmM5MDM1NTdlNWI4ZGQ5ZjM4NmU4Nzc1ZmIxNmIyYiIsIm5iZiI6MTcyNjY0ODU5Ni4wMzU1NzUsInN1YiI6IjY0YzRjM2ZmZWVjNWI1MDExY2IwMWE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QjqhvJUEPoTJGIsYwDPtITf8StzgPSQl6Kt7bm7I8ps";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=20",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const Popular = () => {
  const [populars, setPopulars] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 20;
  const pageVisited = pageNumber * itemsPerPage;
  const LastIndexOfItemPerPage = pageVisited + itemsPerPage;

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPopulars(data.results);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = function () {
      axios(options).then((res) => {
        console.log(res.data);
        setPopulars(res.data.results);
      });
      // response = response.data;
      // console.log(response.results);
      // setPopulars(response.results);
    };
    fetchData();
    // console.log(response.data);
  }, []);

  const currentItems = populars.slice(pageVisited, LastIndexOfItemPerPage);
  const pageCount = Math.ceil(populars.length / itemsPerPage);

  const cards = currentItems.map((element) => (
    <MovieCard
      key={element.id}
      poster={element.poster_path}
      title={element.title}
      overview={element.overview}
      releaseDate={element.release_date}
      voteAverage={element.vote_average}
    />
  ));
  // refer to the npm package document, use selected for the pageNumber setting.
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <h1>Popular</h1>
      {currentItems.length > 0 ? (
        <div className="container">
          <div className="grid">{cards}</div>
        </div>
      ) : (
        <h1>Results are not found!Please check the enter is correct.</h1>
      )}
      {currentItems.length > 0 && (
        <ReactPaginate
          breakAriaLabels="..."
          nextAriaLabel={"Next"}
          previousAriaLabel={"Previous"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"paginationBttns"}
          activeClassName={"paginationActive"}
        />
      )}
    </>
  );
};

export default Popular;
