const darkmode = document.getElementById('darkmode');
const burger = document.getElementById('burger');
const modal = document.getElementById('modal');
const a = document.querySelectorAll('a');
const burgerColor = document.querySelectorAll('#header > div:nth-child(3) > label > span');
const header = document.querySelector('header');
const ul = document.querySelector('ul');

darkmode.addEventListener('click', () => {
  darkmode.classList.toggle('active');
  localStorage.setItem('lightMode', darkmode.classList.contains('active'));
  header.classList.toggle('active');
  ul.classList.toggle('dark');
  a.forEach((item) => item.classList.toggle('active'));
  burgerColor.forEach((item) => item.classList.toggle('active'));
});

burger.addEventListener('click', () => {
  ul.classList.toggle('active');
});

window.addEventListener('load', () => {
  if (localStorage.getItem('lightMode') === 'true') {
    darkmode.click();
  }
});

newCategory.addEventListener('click', ()=>{
  modal.classList.toggle('hidden')
})

const fechar = document.getElementById("fechar")


fechar.addEventListener('click',()=>{
  modal.classList.toggle('hidden')
})
