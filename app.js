const burger = document.querySelector('.burger');
const links = document.querySelector('.links');

burger.addEventListener('click', ()=> {
    links.classList.toggle('open');
    links.classList.collapse('hide');
})
