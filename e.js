const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.querySelector('.navbar'); // Select the first element with the class "navbar"
if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
