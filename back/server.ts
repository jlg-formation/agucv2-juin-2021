import express from "express";
import serveIndex from "serve-index";
// import cors from "cors";

const app = express();
const port = 3000;
const wwwDir = "./public";

// app.use(cors({}));

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
