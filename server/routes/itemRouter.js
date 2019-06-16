const express = require("express");
const cachedItems = require("../data/items.json");
const fs = require('fs');

const itemRouter = express.Router();

const getItem = function(itemId) {
  let item =
    cachedItems.find(function(item) {
      return item.id === itemId || item.integerId === itemId;
    });
  if(item){
  let fileRawData = fs.readFileSync("./server/data/favoriteItemIds.json");
  let favoriteItemIds = JSON.parse(fileRawData);
  item.isFavorite = favoriteItemIds.indexOf(itemId) == -1 ? false : true;
  return item;
  } else {
    return {};
  }
};

function setIsItemFavorite(itemId, isFavorite) {
  let fileRawData = fs.readFileSync("./server/data/favoriteItemIds.json");
  let favoriteItemIds = JSON.parse(fileRawData);
  if (isFavorite == "true") {
    if (favoriteItemIds.indexOf(itemId) == -1) {
      favoriteItemIds.push(itemId);
    }
  } else if (isFavorite == "false") {
    favoriteItemIds.splice(favoriteItemIds.indexOf(itemId), 1);
  }
  console.log(isFavorite)
  fs.writeFileSync("./server/data/favoriteItemIds.json", JSON.stringify(favoriteItemIds, null, 2));
};

itemRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const item = getItem(id);
  if (Object.keys(item).length == 0) {
    res.status(404).json(item);
  } else {
    res.status(200).json(item);
  }
});

itemRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const item = getItem(id);
  if (item.id) {
    setIsItemFavorite(id, req.query.favorite);
  }
  if (Object.keys(item).length == 0) {
    res.status(404).json(item);
  } else {
    res.status(200).json(item);
  }
});

module.exports = itemRouter;
