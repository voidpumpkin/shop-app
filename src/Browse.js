import React, { Component } from "react";
import queryString from "query-string";
import ItemList from "./ItemList";
import Pagination from "./Pagination";

class Browse extends Component {
  constructor(props) {
    super(props);
    const queryStringValues = queryString.parse(this.props.location.search);
    this.state = {
      shopItems: null,
      totalShopItems: null,
      pageCount: null,
      currentPage: queryStringValues.page ? queryStringValues.page : 1,
      itemLimit: 10
    };
  }

  componentDidMount() {
    this.fetchPageShopItems();
  }

  fetchPageShopItems() {
    let start = this.state.itemLimit * (this.state.currentPage - 1);
    fetch(
      `http://localhost:3001/browse?start=${start}&limit=${this.state.itemLimit}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          shopItems: data.items,
          totalShopItems: data.totalItems,
          pageCount: Math.ceil(data.totalItems / this.state.itemLimit)
        })
      );
  }

  render() {
    if (this.state.shopItems) {
      return (
        <div>
          <ItemList items={this.state.shopItems} />
          <Pagination currentPage={this.state.currentPage} />
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Browse;
