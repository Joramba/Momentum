import { showTime, getRandomNum, setBg, getTimeOfDay } from '../js/time.js';
import { setLocalStorage, getLocalStorage } from '../js/localStorage.js';
import { getSlideNext, getSlidePrev } from '../js/slider.js';

const date = new Date();

const slideNext = document.querySelector('.slide-next'),
    slidePrev = document.querySelector('.slide-prev');


let randomNum = getRandomNum();

showTime();
setBg(getTimeOfDay(date.getHours()), randomNum)

slideNext.addEventListener('click', () => {
    randomNum =  getSlideNext(randomNum);
    setBg(getTimeOfDay(date.getHours()), randomNum)
});

slidePrev.addEventListener('click', () => {
    randomNum =  getSlidePrev(randomNum);
    setBg(getTimeOfDay(date.getHours()), randomNum)
});




