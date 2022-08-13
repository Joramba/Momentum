import { showTime, getLinkToimage, getRandomNum } from '../js/time.js';
import { setCity, getWeather } from "../js/weather.js";
import { greeting, setPlaceholder } from './greeting.js';
import { getQuotes } from './quotes.js';
import { createLi } from '../js/player.js'
import { settings } from './settings.js';

const slideNext = document.querySelector('.slide-next'),
    slidePrev = document.querySelector('.slide-prev');



let language = localStorage.getItem('language'),
    city = localStorage.getItem("city");

if (localStorage.getItem('language') == null) {
    localStorage.setItem('language', 'en');
    language = 'en';
}

if (localStorage.getItem('city') == null) {
    localStorage.setItem('city', 'Minsk');
    city = 'Minsk';
}


createLi();
showTime();
setPlaceholder(language);
greeting();
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
    getLinkToimage(getRandomNum(100));
});

slidePrev.addEventListener('click', () => {
    getLinkToimage(getRandomNum(100));
});


