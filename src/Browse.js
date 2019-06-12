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
    console.log(this.state.currentPage);
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
          <ul>
            {/* FIXME: Will overflow with too many pages, separate component needed */}
            {[...Array(this.state.pageCount)].map((e, i) => (
              <a href={`?page=${i + 1}`} key={i + 1}>
                {i + 1}
              </a>
            ))}
          </ul>
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

export default Browse;
