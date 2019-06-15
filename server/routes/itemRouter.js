const express = require("express");
const cors = require("cors");
const cachedItems = require("../data/items.json");
const packagejson = require("../../package.json");
let favoriteItemIds = [];
//TODO: fix duplicate code corsOptions
const corsOptions = {
  origin: ["http://localhost:3000", packagejson.homepage],
  optionsSuccessStatus: 200
};

const itemRouter = express.Router();

const getItem = function(itemId) {
  let item =
    cachedItems.find(function(item) {
      return item.id === itemId || item.integerId === itemId;
    }) || {};
  item.isFavorite = favoriteItemIds.indexOf(itemId) == -1 ? false : true;
  return item;
};

itemRouter.get("/:id", cors(corsOptions), (req, res) => {
  const id = req.params.id;
  const item = getItem(id);
  if (Object.keys(item).length == 0) {
    res.status(404).json(item);
  } else {
    res.status(200).json(item);
  }
});

itemRouter.put("/:id", cors(corsOptions), (req, res) => {
  if (req.query.favorite == "true") {
    favoriteItemIds.push(req.params.id);
  } else if (req.query.favorite == "false") {
    favoriteItemIds.splice(favoriteItemIds.indexOf(req.params.id), 1);
  }

  const id = req.params.id;
  const item = getItem(id);
  if (Object.keys(item).length == 0) {
    res.status(404).json(item);
  } else {
    res.status(200).json(item);
  }
});

module.exports = itemRouter;
