import React from "react";
import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <a
      id={`item-${item.id}-card`}
      className="browse-item-card gold-border"
      href={`/item/${item.id}`}
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
    </a>
  );
}

export default ItemCard;
