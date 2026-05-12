const menu = document.querySelector('nav');
const btn = document.querySelector('.menu-btn');

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}

btn.addEventListener('click', toggleMenu);