import { IDatabaseFactory } from "./IDatabaseFactory"
import { IMongoDatabase } from "../IMongoDatabase"
import { inject, injectable } from "inversify"
import { TYPES } from "../../../ioc/types"

@injectable()
class DatabaseFactory implements IDatabaseFactory {

    private readonly iMongoDatabase: IMongoDatabase

    constructor(
        @inject(TYPES.IMongoDatabase) iMongoDatabase: IMongoDatabase
    ) {
        this.iMongoDatabase = iMongoDatabase
    }

    getDatabase(): IMongoDatabase {
        return this.iMongoDatabase
    }
}

export { DatabaseFactory }