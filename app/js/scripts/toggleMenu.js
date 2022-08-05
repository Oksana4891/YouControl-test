
export function toggleMenu()  {
const btn = document.querySelector('.js-info');
const menu = document.querySelector('.js-menu');

btn.onclick = function () {
    
    btn.classList.toggle('is-active');
    menu.classList.toggle('is-open');
    
};
}




