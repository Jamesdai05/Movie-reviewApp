import Popular from "../pages/Popular"
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import Trending from "../pages/Trending";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchPage from "../pages/SearchPage";

const NavBar = () => {
  // console.log(props);
  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="/">Movie Tracking</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"} element={<Home />}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/popular"} element={<Popular />}>
                Popular
              </Nav.Link>

              <Nav.Link as={Link} to={"/search"} element={<SearchPage />}>
                Search
              </Nav.Link>
              <Nav.Link as={Link} to={"/favourite"} element={<Favourite />}>
                Favourite
              </Nav.Link>
              <Nav.Link as={Link} to={"/trending"} element={<Trending />}>
                Trending
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">
                Sign Up
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex" onSubmit={props.handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Enter the movie name"
                className="me-2"
                aria-label="Search"
                name="query"
                value={props.query}
                onChange={props.handleChange}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
