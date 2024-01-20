import { Component } from "react";
import "./styles.css";
export default class MovieCard extends Component {
  // addStars = () => {
  //   if (this.state.stars >= 5) {
  //     return;
  //   }
  //   // this.setState({ stars: this.state.stars + 0.5 }, () =>
  //   //   console.log("stars 1", this.state.stars)
  //   // );

  //   this.setState(
  //     (prevState) => {
  //       return { stars: prevState.stars + 0.5 };
  //     },
  //     () => console.log("stars 2", this.state.stars)
  //   );

  //   // console.log("this.state.stars", this.state.stars); //this will print first as setState() is async ;this is automatically binded to the current object due to arrow function
  // };
  // decStars = () => {
  //   if (this.state.stars === 0) {
  //     return;
  //   }
  //   this.setState((prevState) => {
  //     return { stars: prevState.stars - 0.5 };
  //   });
  // };
  // handleFav = () => {
  //   this.setState({ fav: !this.state.fav });
  // };
  // handleCart = () => {
  //   this.setState({ isInCart: !this.state.isInCart });
  // };
  render() {
    console.log(this.props);
    const { title, plot, price, rating, stars, fav, isInCart } =
      this.props.movies;
    const { movies, cartCount, addStars, decStars, toggleCart, toggleFav } =
      this.props;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSK0mRgxk6RD6AXbkAzpQRs7FCh9J0FiOxC9eIHCqoxAgpBeywiPrFjbAcGKbCaVYkc"
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs {price}/-</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  className="str-btn"
                  onClick={() => {
                    decStars(movies);
                  }}
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  className="stars"
                />
                <img
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png "
                  className="str-btn"
                  onClick={() => {
                    console.log(movies);
                    addStars(movies);
                  }}
                />
                <span>{stars}</span>
              </div>
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {
                  toggleFav(movies);
                }}
              >
                {fav ? "Un-favourite" : "Favourite"}
              </button>
              <button
                className={isInCart ? "unfavourite-btn" : "cart-btn"}
                onClick={() => {
                  toggleCart(movies);
                }}
              >
                {isInCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
