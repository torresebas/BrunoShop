import { Component } from "react";

const styles ={
  product: {
    border : 'solid 1px #eee',
    boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
    width: "30%",
    padding : '10px 15px',
    borderRadius: '5px'
  },
  img: {
    width: '100%'
  }
}

class Product extends Component {
  render(){
    console.log(this.props)
    const {product} = this.props
    return(
      <div style={styles.product}>
        <img style={styles.img} src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    )
  }
}

export default Product