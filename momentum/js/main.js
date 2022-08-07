import { showTime, getRandomNum, setBg, getTimeOfDay } from '../js/time.js';
import { setLocalStorage, getLocalStorage } from '../js/localStorage.js';
import { getSlideNext, getSlidePrev } from '../js/slider.js';
import { getWeather } from "../js/weather.js"
import { getQuotes } from './quotes.js';

const date = new Date();

const city = document.querySelector('.city'),
    name = document.querySelector('.name'),
    slideNext = document.querySelector('.slide-next'),
    slidePrev = document.querySelector('.slide-prev');


let randomNum = getRandomNum();

showTime();
setBg(getTimeOfDay(date.getHours()), randomNum)


slideNext.addEventListener('click', () => {
    randomNum = getSlideNext(randomNum);
    setBg(getTimeOfDay(date.getHours()), randomNum)
});

slidePrev.addEventListener('click', () => {
    randomNum = getSlidePrev(randomNum);
    setBg(getTimeOfDay(date.getHours()), randomNum)
});



city.value = "Minsk";

if (localStorage.getItem("city") === null) {
    localStorage.setItem("city", "Minsk");
} else[
    city.value = localStorage.getItem("city")
]

getWeather(localStorage.getItem("city"));


name.addEventListener('change', setLocalStorage);
window.addEventListener('load', getLocalStorage(name));

city.addEventListener('change', () => {
    getWeather(city.value);
});


getQuotes();




