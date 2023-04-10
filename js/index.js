const darkmode = document.getElementById('darkmode')
const burger = document.getElementById('burger')
const a = document.querySelectorAll('a')
const burgerColor = document.querySelectorAll('#header > div:nth-child(3) > label > span')

darkmode.addEventListener('click', () => {
    darkmode.classList.toggle('active')
    header.classList.toggle('active')
    ul.classList.toggle('dark')
    a.forEach((item)=> item.classList.toggle('active'))
    burgerColor.forEach((item)=> item.classList.toggle('active'))
})
burger.addEventListener('click', () => {
    ul.classList.toggle('active')
})