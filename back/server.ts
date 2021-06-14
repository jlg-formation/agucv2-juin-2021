const express = require("express");
const serveIndex = require("serve-index");
const app = express();
const port = 3000;
const wwwDir = "./public";

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
