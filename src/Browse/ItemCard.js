import React from "react";
import { Link } from 'react-router-dom'
import "./ItemCard.css";
import FavoriteButton from "../SharedComponents/FavoriteButton";

function ItemCard({ item }) {
  return (
    <Link
      id={`item-${item.id}-card`}
      className="browse-item-card gold-border"
      to={`/item/${item.id}`}
    >
      <img
        id={`item-${item.id}-image`}
        className="browse-item-card-image"
        src={item.image}
        alt={`item ${item.id}`}
        key={item.id}
      />
      <div id="item-title" className="browse-item-card-title gold-text">
        {item.title}
      </div>
      <div id="item-price" className="browse-item-card-price">
        {item.price ? item.price.amounts.EUR : "Price Upon Request"}
      </div>
      <FavoriteButton
        style={{ margin: "2%", width: "10%", bottom: "0px", right: "0px" }}
      />
    </Link>
  );
}

export default ItemCard;
