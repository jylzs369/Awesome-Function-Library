// 显示模块，添加HASH
const showSection = (part, hash) => {
    hash && (location.hash = hash)
    part.classList.remove('hide')
}
// 隐藏模块，删掉HASH
const hideSection = (part) => {
    location.hash = ''
    part ? part.classList.add('hide') : document.querySelectorAll('article').forEach(item => item.classList.add('hide'))
}

window.addEventListener('load', () => {
    let menu = document.querySelector('.menu')
    let page = document.querySelector('.page')
    let back = document.getElementById('back')
    let anchor = location.hash.slice(1)

    if (anchor) {
        hideSection(menu)
        showSection(page)
        showSection(document.querySelector(`article[title="${anchor}"`), anchor)
    }

    menu.addEventListener('click', (e) => {
        let target = e.target
        // 开启页面并显示部分文章
        if (e.target.tagName === 'LI') {
            let title = e.target.title
            hideSection(menu)
            showSection(page)
            showSection(document.querySelector(`article[title="${title}"`), title)
        }
    }, false)

    back.addEventListener('click', (e) => {
        hideSection(page)
        hideSection()
        showSection(menu)
    })
    
}, false)