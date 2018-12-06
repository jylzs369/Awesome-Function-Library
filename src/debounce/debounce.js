const log = function () {
    console.log('log')
}

const debounce = function (fn, timeout) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, timeout)
    }
}

document.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        debounce(log, 2000)
    }
}, false)

