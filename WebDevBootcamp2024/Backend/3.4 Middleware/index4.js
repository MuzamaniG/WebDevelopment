import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;

var name = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));


function nameGenerator(req, res, next) 
{
  console.log(req.body);
  name = req.body["street"] + req.body["pet"];
  next();
}

app.use(nameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});



app.post("/submit", (req, res) => {
  res.send(<h1></h1>>
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
