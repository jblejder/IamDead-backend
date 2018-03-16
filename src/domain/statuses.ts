
class Status {
    userId: string
    battery: number

    constructor(userId: string, battery: number) {
        this.userId = userId
        this.battery = battery
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
