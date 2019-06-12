import React from "react";
import ItemCard from "./ItemCard";

function ItemCardList({ items }) {
  return (
    <div id="item-list">
      {items.map((item, i) => (
        <ItemCard item={item} key={i} />
      ))}
    </div>
  );
}

export default ItemCardList;
