const settings = document.querySelector('.settings-button'),
    slider = document.querySelector('.settings-slider'),
    settingsLanguages = document.querySelector('.select-languages');

settingsLanguages[localStorage.getItem('index')].selected = true;
settings.addEventListener('click', () => {
    slider.classList.toggle('open');
});

function setLanguage(language) {
    if (language === undefined) {
        localStorage.setItem('language', 'en');
        language = 'en';
    } else {
        localStorage.setItem('language', language);
    }
}

settingsLanguages.addEventListener('change', () => {
    let language = settingsLanguages.options[settingsLanguages.selectedIndex].value;
    setLanguage(language);

    for (let i = 0; i < settingsLanguages.length; i++) {
        if (settingsLanguages[i].value == localStorage.getItem('language')) {
            localStorage.setItem('index', i);
            language = settingsLanguages[i].value;
        }
    }

    document.location.reload()
});

export { settings }


