function setLocalStorage(e) {
    localStorage.setItem('name', e.target.value);
}

function getLocalStorage(name) {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

function greeting() {
    const name = document.querySelector('.name');

    name.addEventListener('change', setLocalStorage);
    window.addEventListener('load', getLocalStorage(name));
}

export { greeting, setLocalStorage, getLocalStorage };