import Popular from "./components/Popular";
import Search from "./components/SearchPage/SearchBar";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import Trending from "./components/Trending";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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

              <Nav.Link as={Link} to={"/search"} element={<Search />}>
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
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
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
