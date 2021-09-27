import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    products :[
      {name:'Tomato', price: 2.50, img:'/products/tomato.jpg'},
      {name:'Peas', price: 2.50, img:'/products/peas.jpg'},
      {name:'Lettuce', price: 2.50, img:'/products/lettuce.jpg'}
    ]
  }
  render(){
    return(
      'hola'
    )
  }
}


export default App;
