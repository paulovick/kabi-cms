import {IDatabase} from "../IDatabase"

interface IDatabaseFactory {
    getDatabase(): IDatabase
}

export { IDatabaseFactory }