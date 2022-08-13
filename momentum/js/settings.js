const settings = document.querySelector('.settings-button'),
    slider = document.querySelector('.settings-slider'),
    settingsLanguages = document.querySelector('.select-languages');

if (localStorage.getItem('index') == null) {
    localStorage.setItem('index', 0);
}
settingsLanguages[localStorage.getItem('index')].selected = true;


function setLanguage(language) {
    if (language === undefined) {
        localStorage.setItem('language', 'en');
        language = 'en';
    } else {
        localStorage.setItem('language', language);
    }
}

settings.addEventListener('click', () => {
    slider.classList.toggle('open');
});

settingsLanguages.addEventListener('change', () => {
    let language = settingsLanguages.options[settingsLanguages.selectedIndex].value;
    console.log(language)
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


