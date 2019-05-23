
interface IDatabase {
    getById<T>(id: number, type: (new () => T)): Promise<T | null>
}

export { IDatabase }