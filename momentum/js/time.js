import { translator } from "../js/translator.js";

const date = new Date();
const img = new Image();


function getRandomNum() {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}


function getTimeOfDay(hours = date.getHours()) {
    if (hours >= 0 && hours <= 3) {
        return 'night'
    }
    else if (hours >= 4 && hours <= 11) {
        return 'morning'
    }
    else if (hours >= 12 && hours <= 16) {
        return 'afternoon'
    }
    else if (hours >= 17 && hours <= 23) {
        return 'evening'
    }
}



function showTime() {
    const date = new Date();

    const time = document.querySelector('.time'),
        dates = document.querySelector('.date'),
        currentTime = date.toLocaleTimeString(),
        language = localStorage.getItem('language');

    time.textContent = currentTime;

    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString(language, options);
    dates.textContent = currentDate;

    function greeting(language) {
        const greeting = document.querySelector('.greeting')
        const date = new Date();
        const hours = date.getHours();
        const timeOfDay = getTimeOfDay(hours);
        greeting.textContent = `${translator[language][timeOfDay]}`;
    }

    greeting(language);
    setTimeout(showTime, 1000);
}

async function getLinkToimage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=CNocQJjf9gCD2jrKOy3lDNgWT03jZ9tEtOwL20yLv3g';
    const res = await fetch(url);
    const data = await res.json();

    img.src = "../assets/img/bg.jpg"

    img.addEventListener('load', () => {
        document.body.style.backgroundImage = `url('${data.urls.regular}')`;
    });
}

export { showTime, getRandomNum, getTimeOfDay, getLinkToimage };


