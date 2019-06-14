import React, { Component } from "react";
import "./Item.css";
import Image from "./Image";
import Title from "./Title";
import Price from "./Price";
import Measurements from "./Measurements";
import Description from "./Description";
import Creators from "./Creators";

class Item extends Component {
  constructor(props) {
    super(props);
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
          <Image src={this.state.image} />
          <div id="item-details" className="item-details">
            <Title text={this.state.title} />
            <Price price={this.state.price} />
            <Measurements text={this.state.measurements.display} />
            <Description text={this.state.description} />
            <Creators text={this.state.creators} />
          </div>
        </div>
      );
    } else {
      return <h1 id="loader">Loading...</h1>;
    }
  }
}

export default Item;
