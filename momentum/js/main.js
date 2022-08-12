import { showTime, getRandomNum, setBg } from '../js/time.js';
import { setCity, getWeather } from "../js/weather.js";
import { greeting, setPlaceholder } from './greeting.js';
import { getSlideNext, getSlidePrev } from '../js/slider.js';
import { getQuotes } from './quotes.js';
import { createLi } from '../js/player.js'
import { setLanguage } from './setLanguage.js';
import { settings } from './settings.js';

const slideNext = document.querySelector('.slide-next'),
    slidePrev = document.querySelector('.slide-prev'),
    city = localStorage.getItem("city"),
    settingsLanguages = document.querySelector('.select-languages');

let randomNum = getRandomNum(),
    language = localStorage.getItem('language');

setLanguage(language);
createLi();
showTime();
setPlaceholder(language);
greeting();
setBg(randomNum);
setCity('.city', language);
getQuotes(language);
getWeather(city, language);


const playItems = document.querySelectorAll('.play-item');

playItems.forEach(element => {
    element.addEventListener('click', () => {
        console.log("111");
    });
});

slideNext.addEventListener('click', () => {
    randomNum = getSlideNext(randomNum);
    setBg(randomNum);
});

slidePrev.addEventListener('click', () => {
    randomNum = getSlidePrev(randomNum);
    setBg(randomNum);
});


settingsLanguages.addEventListener('change', () => {
    language = settingsLanguages.options[settingsLanguages.selectedIndex].value;
    setLanguage(language);
    document.location.reload();
    console.log(language);
});











