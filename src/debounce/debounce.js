const log = function () {
    console.log('log')
}

let debounce = function () {
    let timer = null
    return function (fn, timeout) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, timeout)
    }
}()

document.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        debounce(log, 2000)
    }
}, false)

