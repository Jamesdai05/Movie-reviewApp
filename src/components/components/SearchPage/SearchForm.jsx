import { useState } from "react";
import "./Search.css";
import MovieCard from "../../MovieCard";
import Genre from "../../Genre";

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;



    // movies api call to search
    const searchMovies = async() => {
        // console.log("Searching");
        const trimmedQuery = query.trim();
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(trimmedQuery)}`;

        if (!trimmedQuery) {
            setResults([]);
            return;
        }

        try {
            const response = await fetch(searchUrl);

            if (!response.ok) {
                throw new Error(`Search failed:${response.status}`);
            }

            const data = await response.json();
            setResults(data.results ?? []);
        } catch (err) {
            console.log(err);
        }
    };

    // form submission
    const handleMoviesSearch = (e) => {
        e.preventDefault();
        searchMovies();
    }

    // useEffect(() => {
    //     searchMovies();
    // }, [query]);

    const cards = results.map((element) => (
        <MovieCard
            key={element.id}
            poster={element.poster_path}
            title={element.title}
            overview={element.overview}
            releaseDate={element.release_date}
            voteAverage={element.vote_average}
        />
    ));

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <>
            <h1>Movie Search</h1>
            <div>
                <Genre />
                <form className="searchbar" onSubmit={handleMoviesSearch}>
                    <input
                        type="text"
                        name="movie search"
                        value={query}
                        placeholder="Enter the movie name"
                        onChange={handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
                {results.length > 0 ? (
                    <div className="container">
                        <div className="grid">{cards}</div>
                    </div>
                ) : (
                    <div className="text-center">
                        <h1>Please enter the name of the movie for searching.</h1>
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchForm;
