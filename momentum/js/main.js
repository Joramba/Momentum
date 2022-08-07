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

name.addEventListener('change', setLocalStorage);
window.addEventListener('load', getLocalStorage(name));

slideNext.addEventListener('click', () => {
    randomNum = getSlideNext(randomNum);
    setBg(getTimeOfDay(date.getHours()), randomNum)
});

slidePrev.addEventListener('click', () => {
    randomNum = getSlidePrev(randomNum);
    setBg(getTimeOfDay(date.getHours()), randomNum)
});



city.value = "Minsk";
getWeather(city.value);

city.addEventListener('change', () => {
    getWeather(city.value);
});



getQuotes();


