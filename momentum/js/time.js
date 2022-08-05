'use strict'

function getRandomNum() {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 0; //Максимум и минимум включаются
}


function getTimeOfDay(hours) {
    if (hours >= 0 && hours <= 3) {
        return 'night'
    }
    else if (hours >= 4 && hours <= 15) {
        return 'morning'
    }
    // else if (hours >= 12 && hours <= 16) {
    //     return 'day'
    // }
    else if (hours >= 16 && hours <= 23) {
        return 'evening'
    }
}

function showTime() {
    const time = document.querySelector('.time');
    const dates = document.querySelector('.date');

    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;

    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString('en-US', options);
    dates.textContent = currentDate;

    function greeting() {
        const greeting = document.querySelector('.greeting')

        const date = new Date();
        const hours = date.getHours();


        const timeOfDay = getTimeOfDay(hours);
        const greetingText = `Good ${timeOfDay}`;

        greeting.textContent = greetingText;
    }

    greeting();

    setTimeout(showTime, 1000);
}



function setBg(timeOfDay, bgNum) {
    const img = new Image();
    console.log(img);
    img.src = "/assets/img/bg.jpg"

    bgNum = String(bgNum).padStart(2, "0");

    img.addEventListener('load', () => {
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    })
}


export { showTime, getRandomNum, setBg, getTimeOfDay };


