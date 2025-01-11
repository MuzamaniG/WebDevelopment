import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const port = 3000;
const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    
});

app.put(__dirname, () => {

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});