var originalData = 'dshuoahdowqdbasdhsaiduisadusbaodbdhoashowqbcorirwtqrzbcmpoe'

// 利用ES6原生Set API
const deduplicate1 = string => {
    let result = Array.from(new Set(string.split(''))).join('')
    return result
}

// 首尾取元素随机插入
const shuffle2 = array => {
    let count = len = array.length
    while (count) {
        let index = Math.floor(Math.random() * len)
        array.splice(index, 0, array.pop())
        count--
    }
    return array
}

// 随机抽样重组
const shuffle3 = array => {
    let tempArr = Array.of(...array)
    let newArr = []
    let count = tempArr.length
    while (count) {
        let index = Math.floor(Math.random() * (count - 1))
        newArr.push(tempArr.splice(index, 1)[0])
        count--
    }
    return newArr
}
console.log(shuffle1(originalArray))
console.log(shuffle2(originalArray))
console.log(shuffle3(originalArray))