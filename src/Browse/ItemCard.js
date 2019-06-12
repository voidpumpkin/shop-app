import React from "react";
import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <a
      id={`item-${item.id}-card`}
      className="item-card"
      href={`/item/${item.id}`}
    >
      <img
        id={`item-${item.id}-image`}
        className="item-image"
        src={item.image}
        alt={`item ${item.id}`}
        key={item.id}
      />
      <div id="item-title" className="item-title">
        {item.title}
      </div>
      <div id="item-price" className="item-price">
        {item.price ? item.price.amounts.EUR : "Price Upon Request"}
      </div>
    </a>
  );
}

export default ItemCard;
