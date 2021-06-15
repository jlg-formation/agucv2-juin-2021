import { Article } from "./../front/src/app/interfaces/article";
import express from "express";
import serveIndex from "serve-index";
// import cors from "cors";

const app = express();
const port = 3000;
const wwwDir = "./public";

let articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.34, qty: 123 },
  { id: "a2", name: "Tournevis Cruciforme", price: 4, qty: 12 },
  { id: "a3", name: "Marteau", price: 1.2, qty: 20 },
];

let articleSeq = 3;

// app.use(cors({}));

app.use(express.json());

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.post("/api/articles", (req, res) => {
  const article = req.body as Article;
  articleSeq++;
  article.id = "a" + articleSeq;
  console.log("article: ", article);
  articles.push(article);
  res.json(article);
});

app.delete("/api/articles", (req, res) => {
  const ids = req.body as string[];
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
