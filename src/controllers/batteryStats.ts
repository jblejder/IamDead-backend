import { Request, Response } from "express";

export let getStat = (req: Request, res: Response) => {
    res.send("here will be stats");
};
