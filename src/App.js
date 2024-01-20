import { Component } from "react";
import MovieList from "./MovieList";
import { movies } from "./moviesData";
import Navbar from "./Navbar";
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  incStar = (movie) => {
    const { movies } = this.state;

    const m_id = movies.indexOf(movie);
    if (movies[m_id].stars >= 5) {
      return;
    }
    movies[m_id].stars += 0.5;
    this.setState({ movies: movies });
  };
  decStar = (movie) => {
    const { movies } = this.state;

    const m_id = movies.indexOf(movie);
    if (movies[m_id].stars === 0) {
      return;
    }
    movies[m_id].stars -= 0.5;
    this.setState({ movies: movies });
  };
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const m_id = movies.indexOf(movie);
    movies[m_id].fav = !movies[m_id].fav;
    this.setState({ movies });
  };
  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const m_id = movies.indexOf(movie);
    movies[m_id].isInCart = !movies[m_id].isInCart;
    movies[m_id].isInCart ? cartCount++ : cartCount--;
    this.setState({ movies, cartCount });
    // console.log(cartCount);
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          cartCount={cartCount}
          addStars={this.incStar}
          decStars={this.decStar}
          toggleFav={this.handleToggleFav}
          toggleCart={this.handleToggleCart}
        />
      </>
    );
  }
}
export default App;
