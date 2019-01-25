
    // 指定作用域的debounce函数
    const scopeDebounce = function (fn, wait, scope) {
        console.log(fn.timer, scope)
        clearTimeout(fn.timer)
        fn.timer = setTimeout(function(){
            fn.call(scope)
        }, wait)
    }