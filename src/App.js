import { Component } from "react";
import Products from "./components/Products";

import Layout from "./components/Layout";

class App extends Component {
  state = {
    products: [
      { name: "Tomato", price: 2.5, img: "/products/tomato.jpg" },
      { name: "Peas", price: 7.5, img: "/products/peas.jpg" },
      { name: "Lettuce", price: 4.5, img: "/products/lettuce.jpg" },
    ],
  };
  render() {
    return (
      <div>
        <Layout>
          <Products
            products={this.state.products}
            addToCart={() => console.log("Do nothing")}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
