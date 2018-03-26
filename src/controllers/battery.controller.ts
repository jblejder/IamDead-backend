import { Request, Response } from 'express';
import { Statuses, Status } from '../domain/statuses'
import { Users } from '../domain/users';
import { Controller, Get, Req, Post, Inject } from '@nestjs/common';

@Controller('battery')
export class BatteryController {

    statuses: Statuses
    users: Users
    batteryStats: BatteryStat

    constructor(
        @Inject('Users') users: Users,
        @Inject('Statuses') statuses: Statuses,
    ) {
        this.statuses = statuses
        this.users = users
        this.batteryStats = new BatteryStat(statuses, users)
    }

    @Get()
    stats(@Req() req) {
        const userId = req.query.id as string
        console.log('get stat')
        return this.statuses.all().filter((stat) => stat.userId == userId)
    }

    @Post()
    postStat(@Req() req) {
        const id = req.headers['id'] as string
        const user = this.users.get(id)
        if(user == undefined) {
            console.log('user not exists')
            throw 'FAK'
        }

        const stat: number = req.body.battery
        const dateRaw: string = req.body.date
        if(stat == undefined || dateRaw == undefined) {
            console.log('no stat provided')
            throw 'FAK2'
        }

        const arg = req.body
        const status = new Status(user.id, stat, new Date(dateRaw))
        this.statuses.add(status)
    }
}

class BatteryStat {

    statuses: Statuses;
    users: Users

    constructor(statuses: Statuses, users: Users) {
        this.statuses = statuses;
        this.users = users
    }

    getStat = (req: Request, res: Response) => {
        const userId = req.query.id as string
        console.log('get stat')
        res.send(this.statuses.all().filter((stat) => stat.userId == userId))
    }

    postStat = (req: Request, res: Response) => {
        const id = req.headers['id'] as string
        const user = this.users.get(id)
        if(user == undefined) {
            console.log('user not exists')
            res.status(401)
            res.end()
            return
        }

        const stat: number = req.body.battery
        const dateRaw: string = req.body.date
        if(stat == undefined || dateRaw == undefined) {
            console.log('no stat provided')
            res.status(400)
            res.end()
        }

        const arg = req.body
        const status = new Status(user.id, stat, new Date(dateRaw))
        this.statuses.add(status)
        res.end()
    }
}

export { BatteryStat }
