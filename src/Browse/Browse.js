import React, { Component } from "react";
import queryString from "query-string";
import ItemCardList from "./ItemCardList";
import Pagination from "./Pagination";
import "./Browse.css";

class Browse extends Component {
  constructor(props) {
    super(props);
    const queryStringValues = queryString.parse(this.props.location.search);
    this.state = {
      shopItems: null,
      totalShopItems: null,
      pageCount: null,
      currentPage: queryStringValues.page ? queryStringValues.page : 1,
      itemLimit: 50
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
        this.setState(state => ({
          shopItems: data.items,
          totalShopItems: data.totalItems,
          pageCount: Math.ceil(data.totalItems / state.itemLimit)
        }))
      );
  }

  render() {
    if (this.state.shopItems) {
      return (
        <div id="browse-container" className="browse-container">
          <header
            id="browse-header-wrapper"
            className="browse-header-wrapper gold-border"
          >
            <div id="browse-header" className="browse-header gold-text">
              Browse
            </div>
          </header>
          <ItemCardList items={this.state.shopItems} />
          <Pagination
            pageCount={this.state.pageCount}
            currentPage={this.state.currentPage}
          />
        </div>
      );
    } else {
      return <h1 id="loader">Loading...</h1>;
    }
  }
}

export default Browse;
