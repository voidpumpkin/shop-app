import React, { Component } from "react";
// import queryString from "query-string";
import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);
    // const queryStringValues = queryString.parse(this.props.location.search);
    this.state = {};
  }

  componentDidMount() {
    this.fetchPageShopItems();
  }

  fetchPageShopItems() {
    fetch(`http://localhost:3001/item/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({ ...data }));
  }

  render() {
    if (Object.keys(this.state).length !== 0) {
      return (
        <div id="item-container" className="item-container">
          <div id="image-wrapper" className="item-image-wrapper gold-border">
            <img
              id="item-image"
              className="item-image"
              src={this.state.image}
              alt={"item"}
            />
          </div>
          <div id="item-details" className="item-details">
            <div id="item-title" className="item-title gold-text">
              {this.state.title}
            </div>
            <div id="item-price" className="item-price gold-text">
              {this.state.price
                ? this.state.price.amounts.EUR
                : "Price Upon Request"}
            </div>
            <div id="item-measurements" className="item-measurements">
              <b>Measurements:</b>
              <br />
              {this.state.measurements.display}
            </div>
            <div id="item-description" className="item-description">
              <b>Description:</b>
              <br />
              {this.state.description}
            </div>
            <div id="item-creator" className="item-creator">
              <b>Creators:</b>
              <br />
              {this.state.creators}
            </div>
          </div>
        </div>
      );
    } else {
      return <h1 id="loader">Loading...</h1>;
    }
  }
}

export default Item;
