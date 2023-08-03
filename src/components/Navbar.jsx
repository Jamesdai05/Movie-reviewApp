import About from "./components/About";
import Popular from "./components/Popular";
import Result from "./components/Result";
import Home from "./components/Home";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          expand="lg"
          className="bg-body-tertiary"
        >
          <Container fluid>
            <Navbar.Brand href="#">Movie SearchTech</Navbar.Brand>
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
                <NavDropdown title="Favourite" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Comedy</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Thriller</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Top Rated</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/result"} element={<Result />}>
                  Result
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"} element={<About />}>
                  About
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Enter the movie name"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/result" element={<Result />} />
          <Route path="/popular" element={<Popular />} />
        </Routes>
      </div>
    </>
  );
};

export default NavBar;
