import { showTime, getRandomNum, setBg, getTimeOfDay } from '../js/time.js';
import { setCity, getWeather } from "../js/weather.js";
import { greeting } from './greeting.js';
import { getSlideNext, getSlidePrev } from '../js/slider.js';
import { getQuotes } from './quotes.js';
import { createLi, playAudio, toggleBtn } from '../js/player.js'

const slideNext = document.querySelector('.slide-next'),
    slidePrev = document.querySelector('.slide-prev');
const playButton = document.querySelector('.play');


let randomNum = getRandomNum(),
    isPlay = false;

showTime();
greeting();
setBg(randomNum);
setCity('.city');
getQuotes();
createLi();
getWeather();

slideNext.addEventListener('click', () => {
    randomNum = getSlideNext(randomNum);
    setBg(randomNum);
});

slidePrev.addEventListener('click', () => {
    randomNum = getSlidePrev(randomNum);
    setBg(randomNum);
});

playButton.addEventListener('click', () => {
    toggleBtn();
    playAudio(isPlay);
    isPlay = !isPlay;
});








