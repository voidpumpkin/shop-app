const express = require("express");
const fs = require("fs");

const browseRouter = express.Router();

const getItems = function(payload) {
  let fileRawData = fs.readFileSync("./server/data/items.json");
  let items = JSON.parse(fileRawData);
  const start = Number.parseInt(payload.start) || 0;
  const limit = Number.parseInt(payload.limit) || 9;
  items = items.slice(start, start + limit);
  return {
    items: items,
    totalItems: items.length
  };
};

browseRouter.get("", (req, res) => {
  const response = getItems(req.query);
  res.status(200).json(response);
});

module.exports = browseRouter;
