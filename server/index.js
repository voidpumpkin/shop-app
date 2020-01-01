const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());

// app.use(express.static("build"));
// app.get("/browse", function(req, res) {
//   const page = req.query.page;
//   const path = req.params[0] ? req.params[0] : "index.html";
//   res.sendFile(path, { page, root: "./build" });
// });
app.use("/api/browse", require("./routes/browseRouter"));
app.use("/api/item", require("./routes/itemRouter"));

app.listen(port, function() {
  console.log("Example app listening at localhost:%s", port);
});
