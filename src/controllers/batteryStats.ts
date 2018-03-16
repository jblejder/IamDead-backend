import { Request, Response } from "express";
import { Statuses, Status } from "../domain/Statuses"


class BatteryStat {

    statuses: Statuses;

    constructor(statuses: Statuses) {
        this.statuses = statuses;
    }

    getStat = (req: Request, res: Response) => {
        console.log("get stat")
        res.send(this.statuses.all())
    }

    postStat = (req: Request, res: Response) => {
        console.log("post stat")
        const arg = req.body
        const status = new Status(arg.userId, arg.battery)
        this.statuses.add(status)
        res.end()
    }
}

export { BatteryStat }
