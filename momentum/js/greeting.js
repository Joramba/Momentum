import { translator } from "../js/translator.js";

const name = document.querySelector('.name');

function setPlaceholder(language) {
    name.placeholder = translator[language].placeholder;
}


function setLocalStorage(e) {
    localStorage.setItem('name', e.target.value);
}

function getLocalStorage(name) {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

function greeting() {
    name.addEventListener('change', setLocalStorage);
    window.addEventListener('load', getLocalStorage(name));
}

export { greeting, setLocalStorage, getLocalStorage, setPlaceholder };