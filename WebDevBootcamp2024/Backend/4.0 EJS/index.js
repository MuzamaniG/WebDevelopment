import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const port = 3000;
const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url));


app.get("/", (req, res) => { 
    
    let today = new Date(); 

    let day = today.getDay();
    if (today > 5) {
        day = "weekend, time to have fun!";;
    }
    else {
        day = "weekday, time to grind!";
    } 

    res.render("index.ejs", {
        dayAdvice: day
    }
        
    );
});

app.put(__dirname, () => {

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});