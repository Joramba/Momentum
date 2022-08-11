import { showTime, getRandomNum, setBg, getTimeOfDay } from '../js/time.js';
import { setCity, getWeather } from "../js/weather.js";
import { greeting } from './greeting.js';
import { getSlideNext, getSlidePrev } from '../js/slider.js';
import { getQuotes } from './quotes.js';
import { createLi } from '../js/player.js'
import { setLanguage } from './setLanguage.js';

const slideNext = document.querySelector('.slide-next'),
    slidePrev = document.querySelector('.slide-prev'),
    city = localStorage.getItem("city");

let randomNum = getRandomNum(),
    language = 'en';


setLanguage(language);
createLi();
showTime();
greeting();
setBg(randomNum);
setCity('.city', language);
getQuotes();
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












