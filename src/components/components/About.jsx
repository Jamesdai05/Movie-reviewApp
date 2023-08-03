const About = () => {
  return (
    <>
      <h1>This is about page</h1>;
      <div className="container-info">
        <div class="block-tex">
          <p>
            <em>Movie Data:</em>
            "All the film-related info used in the website, including
            actor,director and studio names , synopses, release dates, trailers
            and poster art is supplie by"
            <a href="https://www.themoviedb.org/movie">The movie Database</a>
            "(TMDB)"
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
