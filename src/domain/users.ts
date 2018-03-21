import * as uuid from 'uuid'

export class User {
    id: string

    constructor(id: string) {
        this.id = id
    }
}

export class Users {

    users = Array<User>()

    generateNewUser(): User {
       const user = new User(uuid.v1())
       this.users.push(user)
       return user
    }

    get(id: string): User {
        const found = this.users.find((user) => user.id == id )
        if(found != undefined) {
            console.log('user exists')
            return found
        }
        console.log('created new user')
        const user = new User(id)
        this.users.push(user)
        return user
    }
}
