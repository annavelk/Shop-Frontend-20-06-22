import React from 'react';
import Products from './products.js';

// Компонент для вывода топа продуктов

class ProductTop extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    // const jsonData = require('./prod.json');
    // this.setState({products: Object.values(jsonData)});
    const apiUrl = 'http://localhost:8000/product/';
     fetch(apiUrl)
       .then((response) => response.json())
      //  .then((data) => {console.log(data)})
      .then((data) => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;

    return (
      <div className="container content">
        <Products products={products} />
      </div>
    );
  }
}

export default ProductTop;
