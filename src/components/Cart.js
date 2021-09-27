import { Component } from "react";

import BubbleAlert from "./BubbleAlert";

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
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={15} />
        </span>
        <button style={styles.cart}>Cart</button>
      </div>
    );
  }
}

export default Cart;
