const express = require("express");
const fs = require("fs");
const ITEMS_FILE_PATH = "./server/data/items.json";

const itemRouter = express.Router();

const getItem = function(itemId) {
  let fileRawData = fs.readFileSync(ITEMS_FILE_PATH);
  let items = JSON.parse(fileRawData);
  return (
    items.find(function(item) {
      return item.id === itemId || item.integerId === itemId;
    }) || {}
  );
};

function mutateItemInFile(item) {
  let fileRawData = fs.readFileSync(ITEMS_FILE_PATH);
  let items = JSON.parse(fileRawData);
  items = items.map(e => (e.id == item.id ? item : e));
  fs.writeFileSync(ITEMS_FILE_PATH, JSON.stringify(items));
}

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
  let item = getItem(id);
  if (item.id) {
    if (req.query.favorite !== item.isFavorite) {
      item = new Object(item);
      item.isFavorite = !item.isFavorite;
      mutateItemInFile(item);
    }
    res.status(200).json(item);
  } else {
    res.status(404).json(item);
  }
});

module.exports = itemRouter;
