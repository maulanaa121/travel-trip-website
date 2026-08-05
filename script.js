const header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',window.scrollY > 10)
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
})