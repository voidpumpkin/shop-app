const express = require('express');
const cors = require('cors');
const cachedItems = require('../data/items.json');
//TODO: fix duplicate code corsOptions
const corsOptions = {
  origin: ["http://localhost:3000","http://192.168.56.1:3000"],
  optionsSuccessStatus: 200
};

const itemRouter = express.Router();

const getItem = function (itemId) {
    return cachedItems.find(function (item) {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

itemRouter.get('/:id', cors(corsOptions), (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.status(200).json(item);
});

module.exports = itemRouter;
