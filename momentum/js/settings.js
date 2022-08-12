const settings = document.querySelector('.settings-button'),
    slider = document.querySelector('.settings-slider');
    // settingsLanguages = document.querySelector('.select-languages');

settings.addEventListener('click', () => {
    slider.classList.toggle('open');
});

// settingsLanguages.addEventListener('change', () => {
//     console.log(settingsLanguages.options[settingsLanguages.selectedIndex].value);
// });

export { settings }


