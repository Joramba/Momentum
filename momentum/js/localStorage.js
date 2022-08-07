function setLocalStorage(e) {
    localStorage.setItem('name', e.target.value);
}

function getLocalStorage(name) {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

export { setLocalStorage, getLocalStorage }