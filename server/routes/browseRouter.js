const express = require('express');
const cors = require('cors');
const cachedItems = require('../data/items.json');
const packagejson = require('../../package.json');
//TODO: fix duplicate code corsOptions
const corsOptions = {
  origin: ["http://localhost:3000",packagejson.homepage],
  optionsSuccessStatus: 200
};

const browseRouter = express.Router();

const getItems = function (payload) {
    const start = Number.parseInt(payload.start) || 0;
    const limit = Number.parseInt(payload.limit) || 9;
    const items = cachedItems.slice(start, start + limit);

    return {
        items: items,
        totalItems: cachedItems.length
    };
};

browseRouter.get('', cors(corsOptions), (req, res)=>{
    const response = getItems(req.query);
    res.status(200).json(response);
});

module.exports = browseRouter;
