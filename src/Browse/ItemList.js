import React from "react";

function ItemList({ items }) {
  return (
    <div id="item-list">
      {items.map(item => (
        <img
          id={`item-${item.id}-image`}
          src={item.image}
          alt={`item ${item.id}`}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default ItemList;
