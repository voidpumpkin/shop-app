import React, { Component } from "react";
import "./Item.css";
import Image from "./Image";
import Title from "./Title";
import Price from "./Price";
import Measurements from "./Measurements";
import Description from "./Description";
import Creators from "./Creators";
import Loader from "../SharedComponents/Loader";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchPageShopItems();
  }

  fetchPageShopItems() {
    fetch(`http://localhost:3001/item/${this.props.match.params.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          throw new Error("Item not found");
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ ...data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    } else if (this.state.isLoading) {
      return <Loader />;
    } else {
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
    }
  }
}

export default Item;
