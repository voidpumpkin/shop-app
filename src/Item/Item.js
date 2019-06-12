import React, { Component } from "react";
import queryString from "query-string";
import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);
    const queryStringValues = queryString.parse(this.props.location.search);
    this.state = {
    };
  }

  componentDidMount() {}

  //   fetchPageShopItems() {
  //     let start = this.state.itemLimit * (this.state.currentPage - 1);
  //     fetch(
  //       `http://localhost:3001/browse?start=${start}&limit=${this.state.itemLimit}`
  //     )
  //       .then(response => response.json())
  //       .then(data =>
  //         this.setState({
  //           shopItems: data.items,
  //           totalShopItems: data.totalItems,
  //           pageCount: Math.ceil(data.totalItems / this.state.itemLimit)
  //         })
  //       );
  //   }

  render() {
    if (this.state.shopItems) {
      return (
        <div id="item-container" className="item-container">
          <header id="item-header-wrapper" className="item-header-wrapper">
            <div id="item-header" className="item-header">
              Item
            </div>
          </header>
        </div>
      );
    } else {
      return <h1 id="loader">Loading...</h1>;
    }
  }
}

export default Item;
