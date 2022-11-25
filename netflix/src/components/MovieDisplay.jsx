import { Component } from "react";
import { Row, Col, Image, Carousel } from "bootstrap";

class MovieDisplay extends Component {
  state = {
    movies: [],
  };

  getMovies = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=2f95a32d&s=${this.props.series}`
      );
      if (response.ok) {
        let r = await response.json();
        console.log(r);
        console.log(r.Search);
        let movieList = r.Search;
        this.setState({ movies: movieList });
      } else {
        console.log("Oops! Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.getMovies();
  };

  movieChunks = (inputArray, perChunk) => {
    let result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
    return result;
  };

  render() {
    return (
      <div className="movie-gallery m-2">
        <Carousel indicators={false}>
          <h5 className="text-light mt-2 mb-2">{this.props.series}</h5>
          {this.movieChunks(this.state.movies, 6).map((moviesRow, index) => (
            <Carousel.Item key={`carousel-${index}`}>
              <div className="active d-flex inline">
                <div className="movie-row">
                  <Row>
                    {moviesRow.map((movie) => (
                      <Col key={movie.imdbID}>
                        <Image className="movie-cover" src={movie.Poster} />
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default MovieDisplay;
