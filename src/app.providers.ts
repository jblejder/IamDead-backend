import { Statuses } from './domain/statuses'
import { Users } from './domain/users'


export const statusesProvider = { provide: 'Statuses', useValue: new Statuses()}
export const usersProvider = { provide: 'Users', useValue: new Users()}