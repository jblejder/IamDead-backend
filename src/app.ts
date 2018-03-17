import * as express from "express"
import * as bodyParser from "body-parser"
import { BatteryStat } from "./controllers/batteryStats"
import { Statuses } from "./domain/statuses"
import { Users } from "./domain/users"


const statuses = new Statuses()
const users = new Users()
const batteryStats = new BatteryStat(statuses, users)

const app = express()

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.get("/stats", batteryStats.getStat)
app.post("/stats", batteryStats.postStat)

export default app
