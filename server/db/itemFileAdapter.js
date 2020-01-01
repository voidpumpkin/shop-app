const fs = require("fs");
const ITEMS_FILE_PATH = "./server/data/items.json";

module.exports = {
  getAllItems: function() {
    let fileRawData = fs.readFileSync(ITEMS_FILE_PATH);
    let items = JSON.parse(fileRawData);
    return items;
  },

  getItems: function(start, limit) {
    const _start = start || 0;
    const _limit = limit || 9;
    let fileRawData = fs.readFileSync(ITEMS_FILE_PATH);
    let items = JSON.parse(fileRawData);
    items = items.slice(_start, _start + _limit);
    return items;
  },

  setItem: function(item) {
    let items = this.getAllItems();
    items = items.map(e => (e.id == item.id ? item : e));
    fs.writeFileSync(ITEMS_FILE_PATH, JSON.stringify(items));
  },

  getItem: function(itemId) {
    let items = this.getAllItems();
    return (
      items.find(function(item) {
        return item.id === itemId || item.integerId === itemId;
      }) || {}
    );
  }
};
