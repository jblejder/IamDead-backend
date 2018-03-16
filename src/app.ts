import * as express from "express";
import * as bodyParser from "body-parser"
import * as batteryStats from "./controllers/batteryStats";


const app = express();

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/stats", batteryStats.getStat);
app.post("/stats", batteryStats.postStat);

export default app;
