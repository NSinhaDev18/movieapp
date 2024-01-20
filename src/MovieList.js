import { Component } from "react";
import MovieCard from "./Moviecard";
// import { movies } from "./moviesData";

export default class MovieList extends Component {
  render() {
    // const { movies } = this.state;
    const { movies, cartCount, addStars, decStars, toggleCart, toggleFav } =
      this.props;
    return movies.map((movie) => (
      <MovieCard
        movies={movie}
        cartCount={cartCount}
        addStars={addStars}
        decStars={decStars}
        toggleFav={toggleFav}
        toggleCart={toggleCart}
      />
    ));
  }
}
