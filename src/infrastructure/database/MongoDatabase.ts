import {IMongoDatabase} from "./IMongoDatabase"
import {injectable} from "inversify"

@injectable()
class MongoDatabase implements IMongoDatabase {
    async getById<T>(id: number, type: (new () => T)): Promise<T | null> {
        const result = new type()
        return result
    }
}

export { MongoDatabase }