function setLanguage(language) {
    if (language === undefined) {
        localStorage.setItem('language', 'en');
        language = 'en';
    } else {
        localStorage.setItem('language', language);
    }
}

export { setLanguage };