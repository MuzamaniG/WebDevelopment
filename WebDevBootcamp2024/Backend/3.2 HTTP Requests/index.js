import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Success");
});

app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
})