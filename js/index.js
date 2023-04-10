const darkmode = document.getElementById('darkmode')
const burger = document.getElementById('burger')
const a = document.querySelectorAll('a')

darkmode.addEventListener('click', () => {
    darkmode.classList.toggle('active')
    header.classList.toggle('active')
    ul.classList.toggle('dark')
    a.forEach((item)=> item.classList.toggle('active'))
})
burger.addEventListener('click', () => {
    ul.classList.toggle('active')
})