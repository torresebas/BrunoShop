import { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <div>
        {products.map((product) => (
          <Product 
            addToCart={addToCart} 
            product={product} 
            key={product.name} 
          />
        ))}
      </div>
    );
  }
}

export default Products;
