import React from "react";

function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <img src={item.image} alt={item.id} key={item.id} />
      ))}
    </ul>
  );
}

export default ItemList;
