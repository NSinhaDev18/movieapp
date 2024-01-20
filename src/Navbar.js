import { Component } from "react";
// import navStyles from "./Navbar.module.css";
import styled from "styled-components";
const Nav = styled.div`
  height: 70px;
  background: linear-gradient(to right, #ffcc00, #ff6666);
  /* selector {
  background: linear-gradient(direction, color-stop1, color-stop2, ...);
          direction: Specifies the direction of the gradient. It can be an angle (e.g., 45deg), a keyword (e.g., "to right"), or a side keyword (e.g., "top").
          color-stop: Specifies a color and its position in the gradient.
} */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Title = styled.h3`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat; sans-serif";
  text-transform: uppercase;
  margin-left: 20px;
`;
const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
`;
const CartCount = styled.span`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => {
    return props.show ? "visible" : "hidden";
  }};
`;
export default class Navbar extends Component {
  render() {
    const { cartCount } = this.props;
    console.log(cartCount);
    return (
      <>
        {/* <div style={styles.nav}> */}
        <Nav>
          <Title>Movie app</Title>
          <CartIconContainer>
            <CartIcon
              alt="cart_Icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            <CartCount color="yellow" show={true}>
              {cartCount}
            </CartCount>
          </CartIconContainer>
        </Nav>
      </>
    );
  }
}
// const styles = {
//   cartIcon: {
//     height: 48,
//     marginRight: 20,
//   },
//   nav: {
//     height: 70,
//     background: "#4267b2",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "relative",
//   },
//   title: {
//     fontSize: 30,
//     color: "#fff",
//     fontWeight: 600,
//     fontFamily: '"Montserrat", sans-serif',
//     textTransform: "uppercase",
//     marginLeft: 20,
//   },

//   cartIconContainer: {
//     position: "relative",
//     cursor: "pointer",
//   },
//   cartCount: {
//     background: "orange",
//     borderRadius: "50%",
//     padding: "4px 8px",
//     position: "absolute",
//     right: 10,
//     top: -5,
//     fontSize: 12,
//   },
// };

/* .nav {
  width: 100%;
  height: 70px;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between;
} */
