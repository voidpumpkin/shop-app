import React, { Component } from "react";
import "./FavoriteButton.css";
import packagejson from "../../package.json";

class FavoriteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFavorite: !this.isFavorite() });
    fetch(
      `${packagejson.proxy}/api/item/${this.props.itemId}?favorite=${!this.props
        .isFavorite}`,
      {
        method: "PUT"
      }
    );
  }

  isFavorite() {
    if (this.state.isFavorite === null) {
      return this.props.isFavorite;
    } else {
      return this.state.isFavorite;
    }
  }

  render() {
    return (
      <div
        id="favorite-button-wrapper"
        className={"favorite-button-wrapper " + this.props.className}
        style={this.props.style}
        onClick={this.handleClick}
      >
        <div
          id="favorite-button"
          className={`favorite-button ${
            this.isFavorite() ? "favorite-button-is-favorite" : ""
          }`}
        ></div>
      </div>
    );
  }
}

export default FavoriteButton;
