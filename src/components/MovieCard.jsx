import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const api_img = "https://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <div className="card-img-top">
          <img
            className="thumbnail"
            src={api_img + props.poster}
            alt="movie_poster"
          />
          <div className="card-img-top">
            <Button variant="dark" className="mt-2" onClick={handleShow}>
              View More
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <h3>{props.title}</h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  className="thumbnail"
                  src={api_img + props.poster}
                  alt="movie"
                  style={{ width: "18rem" }}
                />
                <h4>IMDB:{props.voteAverage}</h4>
                <h5>Release-Date: {props.releaseDate}</h5>
                <br></br>
                <div className="description">{props.overview}</div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Add to Favourite
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
