const fs = require("fs");
const ITEMS_FILE_PATH = "./server/data/items.json";

module.exports = {
  getAllItems: function() {
    let fileRawData = fs.readFileSync(ITEMS_FILE_PATH);
    let items = JSON.parse(fileRawData);
    return items;
  },

  getItems: function(start = 0, limit = 9) {
    let fileRawData = fs.readFileSync(ITEMS_FILE_PATH);
    let items = JSON.parse(fileRawData);
    items = items.slice(start, start + limit);
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