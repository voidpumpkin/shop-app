import React, { Component } from "react";
import queryString from "query-string";

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

function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <img src={item.image} alt={item.id} key={item.id} />
      ))}
    </ul>
  );
}

function Pagination({ currentPage }) {
  return (
    <ul>
      <a href={`?page=${currentPage - 1}`} key={currentPage - 1}>
        &lt;
      </a>
      <a href={`?page=${currentPage}`} key={currentPage}>
        {currentPage}
      </a>
      <a
        href={`?page=${Number(currentPage) + 1}`}
        key={Number(currentPage) + 1}
        disabled
      >
        &gt;
      </a>
    </ul>
  );
}
export default Browse;
