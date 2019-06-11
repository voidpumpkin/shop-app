import React, { Component } from "react";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopItems: null,
      totalShopItems: null,
      pageCount: null,
      currentPage: 1,
      itemLimit: 10
    };
  }
  componentDidMount() {
    this.fetchPageShopItems();
  }
  fetchPageShopItems(page = 1) {
    let start = this.state.itemLimit * (page - 1);
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
          <ul>
            {this.state.shopItems.map(item => (
              <img src={item.image} alt={item.id} key={item.id} />
            ))}
          </ul>
          <ul>
            {/* FIXME: Will overflow with too many pages, separate component needed */}
            {[...Array(this.state.pageCount)].map((e, i) => (
              <button
                onClick={event =>
                  this.fetchPageShopItems(event.target.innerText)
                }
                key={i + 1}
              >
                {i + 1}
              </button>
            ))}
          </ul>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Browse;
