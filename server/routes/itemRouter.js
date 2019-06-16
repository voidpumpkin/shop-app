const express = require("express");
const itemFileAdapter = require("../db/itemFileAdapter.js");

const itemRouter = express.Router();

itemRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const item = itemFileAdapter.getItem(id);
  if (Object.keys(item).length == 0) {
    res.status(404).json(item);
  } else {
    res.status(200).json(item);
  }
});

itemRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  let item = itemFileAdapter.getItem(id);
  if (item.id) {
    if (req.query.favorite !== item.isFavorite) {
      item = new Object(item);
      item.isFavorite = !item.isFavorite;
      itemFileAdapter.setItem(item);
    }
    res.status(200).json(item);
  } else {
    res.status(404).json(item);
  }
});

module.exports = itemRouter;
