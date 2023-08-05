import Popular from "./components/Popular";
import Result from "./components/Result";
import Home from "./components/Home";
import Favourite from "./components/Favourite";

import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="#">Movie Tracking</Navbar.Brand>
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

              <Nav.Link as={Link} to={"/result"} element={<Result />}>
                Result
              </Nav.Link>
              <Nav.Link as={Link} to={"/Favourite"} element={<Favourite />}>
                Favourite
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Enter the movie name"
                className="me-2"
                aria-label="Search"
                name="query"
                value={props.query}
                onChange={props.onChange}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
