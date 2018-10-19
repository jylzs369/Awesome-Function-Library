window.onload = function () {
    menu = document.querySelector('.menu')
    page = document.querySelector('.page')
    back = document.getElementById('back')
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
}