var originalArray = ['红桃J', '黑桃A', '方块8', '梅花6', '黑桃K', '红桃A', '梅花9', '梅花2', '红桃K', '黑桃5']

// 数组数据两两交换
const shuffle1 = array => {
    let count = array.length - 1
    while (count) {
        let index = Math.floor(Math.random() * (count + 1))
        ;[array[index], array[count]] = [array[count], array[index]]
        count--
    }
    return array
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