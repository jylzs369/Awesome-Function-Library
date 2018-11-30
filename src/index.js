window.addEventListener('load', () => {
    let menu = document.querySelector('.menu')
    let page = document.querySelector('.page')
    let back = document.getElementById('back')
    let anchor = location.hash.slice(1)

    const showSection = (part) => {
        part.classList.remove('hide')
    }
    const hideSection = (part) => {
        part ? part.classList.add('hide') : document.querySelectorAll('article').forEach(item => item.classList.add('hide'))
    }

    menu.addEventListener('click', (e) => {
        let target = e.target
        // 开启页面并显示部分文章
        if (e.target.tagName === 'LI') {
            let title = e.target.title
            hideSection(menu)
            showSection(page)
            showSection(document.querySelector(`article[title="${title}"`))
        }
    }, false)

    back.addEventListener('click', (e) => {
        hideSection(page)
        hideSection()
        showSection(menu)
    })
    
    if (anchor) {
        hideSection(menu)
        showSection(page)
        showSection(document.querySelector(`article[title="${anchor}"`))
    }
}, false)