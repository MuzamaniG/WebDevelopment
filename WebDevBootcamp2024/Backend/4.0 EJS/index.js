import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const port = 3000;
const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url));


app.get("/", (req, res) => { 
    
    let today = new Date(); 
    let advice = "";
    let day = today.getDay();
    if (day == 6 || today === 0) {
        advice = "weekend, time to have fun!";;
    }
    else {
        advice = "weekday, time to grind!";
    } 

    res.render("index.ejs", {
        dayAdvice: advice
    }
        
    );
});

app.put(__dirname, () => {

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});