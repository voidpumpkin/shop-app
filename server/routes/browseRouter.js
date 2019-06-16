const express = require("express");
const cors = require("cors");
const cachedItems = require("../data/items.json");
const fs = require("fs");

const browseRouter = express.Router();

const getItems = function(payload) {
  const start = Number.parseInt(payload.start) || 0;
  const limit = Number.parseInt(payload.limit) || 9;
  const items = cachedItems.slice(start, start + limit);
  let fileRawData = fs.readFileSync("./server/data/favoriteItemIds.json");
  let favoriteItemIds = JSON.parse(fileRawData);
  items.map(
    e => (e.isFavorite = favoriteItemIds.indexOf(e.id) == -1 ? false : true)
  );
  return {
    items: items,
    totalItems: cachedItems.length
  };
};

browseRouter.get("", (req, res) => {
  const response = getItems(req.query);
  res.status(200).json(response);
});

module.exports = browseRouter;
