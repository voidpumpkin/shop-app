import React from "react";
import ItemCard from "./ItemCard";
import "./ItemCardList.css";

function ItemCardList({ items }) {
  return (
    <div id="item-list" className="browse-item-card-list">
      {items.map((item, i) => (
        <ItemCard item={item} key={i} />
      ))}
    </div>
  );
}

export default ItemCardList;
