import express from "express";
import serveIndex from "serve-index";
// import cors from "cors";

const app = express();
const port = 3000;
const wwwDir = "./public";

const articles = [
  { name: "Tournevis", price: 2.34, qty: 123 },
  { name: "Tournevis Cruciforme", price: 4, qty: 12 },
  { name: "Marteau", price: 1.2, qty: 20 },
];

// app.use(cors({}));

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
