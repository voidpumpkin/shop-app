const express = require("express");
const itemFileAdapter = require("../db/itemFileAdapter.js");

const browseRouter = express.Router();

const getItems = function(payload) {
  const start = Number.parseInt(payload.start);
  const limit = Number.parseInt(payload.limit);
  const items = itemFileAdapter.getItems(start, limit);
  const totalItems = itemFileAdapter.getAllItems().length;
  return {
    items,
    totalItems
  };
};

browseRouter.get("", (req, res) => {
  const response = getItems(req.query);
  res.status(200).json(response);
});

module.exports = browseRouter;
