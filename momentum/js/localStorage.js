const name = document.querySelector('.name');

function setLocalStorage(e) {
    localStorage.setItem('name', e.target.value);
}

function getLocalStorage(name) {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

name.addEventListener('change', setLocalStorage);
window.addEventListener('load', getLocalStorage(name));

export { setLocalStorage, getLocalStorage }