import React from "react";

function ItemCard({ item }) {
  return (
    <div id={`item-${item.id}-card`}>
      <img
        id={`item-${item.id}-image`}
        src={item.image}
        alt={`item ${item.id}`}
        key={item.id}
      />
      <h6 id="item-title">{item.title}</h6>
      <h6 id="item-price">
        {item.price ? item.price.amounts.EUR : "Price Upon Request"}
      </h6>
    </div>
  );
}

export default ItemCard;
