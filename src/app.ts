import * as express from "express";
import * as batteryStats from "./controllers/batteryStats";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/stats", batteryStats.getStat);

export default app;
