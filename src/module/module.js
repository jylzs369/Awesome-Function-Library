// 实现最简单的模块
function simpleModule () {
    let sayHello = function sayHello (name) {
        return `Hi, ${name}`
    }
    return {
        sayHello: sayHello
    }
}
var module1 = simpleModule()

// 实现单例模式的模块
var module2 = (function singleModule () {
    let hello = 'Hi, Module 2'
    let sayHello = function sayHello () {
        return hello
    }
    return {
        sayHello: sayHello
    }
})()

// 实现保存对模块的内部引用
var module3 = (function storeModule () {
    let store = {}
    let hello = 'Hi, Module 3'
    let sayHello = function sayHello () {
        return store.getHello()
    }
    let getHello = function getHello () {
        return hello
    }
    store = {
        sayHello: sayHello,
        getHello: getHello
    }
    return store
})()

// 实现一个模块管理器
var ModuleManager = (function moduleManager () {
    let modules = {}
    let register = function register (name, deps, impl) {
        for (let i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]]
        }
        modules[name] = impl.apply(impl, deps)
    }
    let get = function get (name) {
        return modules[name]
    }
    return {
        register: register,
        get: get
    }
})()

ModuleManager.register('module4', [], function () {
    function sayHello (name) {
        return `Hello, ${name || 'module4'}`
    }
    return {
        sayHello: sayHello
    }
})

ModuleManager.register('module5', ['module4'], function (module4) {
    function sayHello (name) {
        return `${module4.sayHello()}, this is Module 5`
    }
    return {
        sayHello: sayHello
    }
})

module4 = ModuleManager.get('module4')
module5 = ModuleManager.get('module5')

;(function () {
    const paras = document.querySelectorAll('function-module p')
    document.querySelector('function-module .function').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            let index = e.target.id.slice(-1)
            paras[index - 1].innerHTML = eval(`module${index}`).sayHello(`Module ${index}`)
        }
    }, false)
})()