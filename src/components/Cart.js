import { Component } from "react";

import BubbleAlert from "./BubbleAlert";
import CartDetails from "./CartDetails";

const styles = {
  cart: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    padding: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: "12px",
    top: "20px",
  },
};

class Cart extends Component {
  render() {
    const { cart } = this.props;
    const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {quantity !== 0 ? <BubbleAlert value={quantity} /> : null}
        </span>
        <button style={styles.cart}>Cart</button>
        <CartDetails cart={cart}/>
      </div>
    );
  }
}

export default Cart;
