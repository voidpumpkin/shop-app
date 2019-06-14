import React from "react";
import ItemCard from "./ItemCard";
import "./ItemCardList.css";

function ItemCardList({ items }) {
  return (
    <div id="item-list" className="browse-item-card-list">
      {items.map(item => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ItemCardList;
