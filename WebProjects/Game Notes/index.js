import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.listen(port, async (req, res) => {
  console.log(`Server running on port ${port}`);
});
