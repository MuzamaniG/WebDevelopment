import express from "express";
const port = 3000;
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const links = 
[
 {"name": "Google", "url": "https://www.google.com" },
 {"name": "Youtube", "url": "https://www.youtube.com"}
]



app.get("/", (req, res) => {
    res.render("index.ejs", { links });
})