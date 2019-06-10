import React, { Component } from "react";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = { shopItems: null, totalShopItems: null };
  }
  componentDidMount() {
    fetch("http://localhost:3001/browse?limit=10")
      .then(response => response.json())
      .then(data =>
        this.setState({
          shopItems: data.items,
          totalShopItems: data.totalItems
        })
      );
  }
  render() {
    if (this.state.shopItems) {
      return (
        <ul>
          {this.state.shopItems.map(item => (
            <img src={item.image} alt={item.id} />
          ))}
        </ul>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Browse;
