import React, { Component } from "react";
import queryString from "query-string";
import ItemCardList from "./ItemCardList";
import Pagination from "./Pagination";
import Loader from "../SharedComponents/Loader";
import "./Browse.css";
import packagejson from "../../package.json";

class Browse extends Component {
  constructor(props) {
    super(props);
    const queryStringValues = queryString.parse(this.props.location.search);
    this.state = {
      isLoading: true,
      error: null,
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
      `${packagejson.proxy}/api/browse?start=${start}&limit=${this.state.itemLimit}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        this.setState(state => ({
          shopItems: data.items,
          totalShopItems: data.totalItems,
          pageCount: Math.ceil(data.totalItems / state.itemLimit),
          isLoading: false
        }));
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    } else {
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
          {this.state.isLoading ? (
            <Loader />
          ) : this.state.shopItems.length ? (
            <ItemCardList items={this.state.shopItems} />
          ) : (
            <p id="browse-item-list">This page has no items</p>
          )}
          <Pagination
            pageCount={this.state.pageCount}
            currentPage={this.state.currentPage}
          />
        </div>
      );
    }
  }
}

export default Browse;
