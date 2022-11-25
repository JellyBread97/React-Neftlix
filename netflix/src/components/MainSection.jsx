import { Component } from "react";
import { Container } from "bootstrap";
import MovieDisplay from "./MovieDisplay.jsx";

class MainSection extends Component {
  state = {};

  render() {
    return (
      <Container id="mainSection">
        <MovieDisplay series="" />
        <MovieDisplay series="" />
        <MovieDisplay series="" />
      </Container>
    );
  }
}

export default MainSection;
