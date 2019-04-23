import { Role } from './Role'

class User {
    public id: number = 0
    public username: string = ''
    public email: string = ''

    public roles: Role[] = []
}

export { User }