
class Status {
    userId: string
    battery: number
    date: Date

    constructor(userId: string, battery: number, date: Date) {
        this.userId = userId
        this.battery = battery
        this.date = date
    }
}

class Statuses {

    statuses: Array<Status> = Array()

    add(status: Status) {
        this.statuses.push(status)
    }

    all(): Status[] {
        return this.statuses
    }
}

export { Status, Statuses }
