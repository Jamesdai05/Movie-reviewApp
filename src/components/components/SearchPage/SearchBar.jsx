import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [Result, setResult] = useState([]);

  return (
    <>
      <h1>This is Search Page</h1>
      <Form className="d-flex" onSubmit="{handleSubmit}">
        <Form.Control
          type="search"
          placeholder="Enter the movie name"
          className="me-2"
          aria-label="Search"
          name="query"
          value={query}
          onChange="{handleChange}"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
};

export default Search;
