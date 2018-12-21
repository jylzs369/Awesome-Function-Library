
// 利用闭包保存定时器的debounce函数
const debounce1 = function () {
    let timer = null
    return function (fn, wait, scope) {
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.call(scope)
        }, wait)
    }
}()

// 利用函数属性保存定时器的debounce函数
const debounce2 = function (fn, wait, scope) {
    clearTimeout(debounce2.timer)
    debounce2.timer = setTimeout(function(){
        fn.call(scope)
    }, wait)
}

// 可配置是否立即执行的debounce函数
const debounce3 = function () {
    let timer = null
    return function (fn, wait, scope, immediate) {
        timer && clearTimeout(timer)
        if (immediate) {
            !timer && fn.call(scope)
            timer = setTimeout(() => {
                timer = null
                count = 0
            }, wait)
        } else {
            timer = setTimeout(function () {
                fn.call(scope)
                timer = null
            }, wait)
        }
    }
}()

const paras = document.querySelectorAll('function-debounce p')
let count = 0
document.querySelector('function-debounce .function').addEventListener('click', (e) => {
    let target = e.target
    if (target.tagName === 'BUTTON') {
        let index = target.id.slice(-1)
        paras[index - 1].innerHTML = ++count
        if (target.id === 'debounce1') {
            debounce1(() => {
                paras[index - 1].innerHTML += ' 执行的内容'
                count = 0
            }, 1000)
        }
        if (target.id === 'debounce2') {
            debounce2(function () {
                paras[index - 1].innerHTML += ' 执行的内容'
                count = 0
            }, 1000)
        }
        if (target.id === 'debounce3') {
            debounce3(function () {
                paras[index - 1].innerHTML += ' 立即执行的内容'
                count = 0
            }, 1000, null, true)
        }
        if (target.id === 'debounce4') {
            debounce3(function () {
                paras[index - 1].innerHTML += ' 延迟执行的内容'
                count = 0
            }, 1000)
        }
    }
}, false)