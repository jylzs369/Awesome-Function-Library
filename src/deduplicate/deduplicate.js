var originalData = '我我们都是勤勤劳的小蜜蜂蜂蜜'

// 利用ES6原生Set API
const deduplicate1 = string => {
    let result = Array.from(new Set(string.split(''))).join('')
    return result
}

// 逐一取出字符串首元素同时过滤相同元素
const deduplicate2 = string => {
    let result = []
    let arr = string.split('')
    while (arr.length) {
        let current = arr.shift()
        result.push(current)
        arr = arr.filter(item => item !== current)
    }
    return result.join('')
}

// 逐一取出字符串首元素同时过滤相同元素正则版
const deduplicate3 = string => {
    let s = string
    let result = []
    let current = ''
    while (s.length) {
        current = s[0]     
        result.push(current)   
        s = s.slice(1)
        s = s.replace(eval(`/${current}/g`), '')
    }
    return result.join('')
}

console.log(deduplicate1(originalData))
console.log(deduplicate2(originalData))
console.log(deduplicate3(originalData))