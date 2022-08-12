import { showTime, getRandomNum, getLinkToimage } from '../js/time.js';
import { setCity, getWeather } from "../js/weather.js";
import { greeting, setPlaceholder } from './greeting.js';
import { getSlideNext, getSlidePrev } from '../js/slider.js';
import { getQuotes } from './quotes.js';
import { createLi } from '../js/player.js'
import { setLanguage } from './setLanguage.js';
import { settings } from './settings.js';

const slideNext = document.querySelector('.slide-next'),
    slidePrev = document.querySelector('.slide-prev'),
    city = localStorage.getItem("city");

let randomNum = getRandomNum(),
    language = localStorage.getItem('language');

setLanguage(language);
createLi();
showTime();
setPlaceholder(language);
greeting();
// setBg(randomNum);
getLinkToimage();
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
    getLinkToimage();
});

slidePrev.addEventListener('click', () => {
    getLinkToimage();
});


