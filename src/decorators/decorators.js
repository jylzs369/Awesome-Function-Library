function readonly (target, name, descriptor) {
    descriptor.writable = false
    return descriptor
}

class Person {
    constructor (name) {
        this._name = name
    }
    
    @readonly
    getName () {
        console.log(`${this._name}`)
    }
}