// 修饰类方法，只读
function readonly (target, name, descriptor) {
    descriptor.writable = false
    return descriptor
}

// 修饰类，混入
function mixins (...methods) {
    return function (target) {
        Object.assign(target.prototype, ...methods)
    }
}

class Role {
    constructor (config) {
        this._name = config.name
        this._age = config.age
        this._gender = config.gender
    }
    
    @readonly
    hello () {
        console.log(`Hello,this is ${this._name}.`)
    }
}

var peter = new Role({
    name: 'Peter'
})
peter.hello()
peter.hello = function () {
    console.log(1)
}