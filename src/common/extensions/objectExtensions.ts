declare global {
    interface Object {
        isNumber(): boolean
    }
}

Object.prototype.isNumber = function(): boolean {
    const numberVar = Number(this)
    return !isNaN(numberVar)
}

export {}