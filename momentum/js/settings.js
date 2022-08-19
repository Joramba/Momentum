const settings = document.querySelector('.settings-button'),
    slider = document.querySelector('.settings-slider'),
    settingsLanguages = document.querySelector('.select-languages');

if (localStorage.getItem('index') == null) {
    localStorage.setItem('index', 0);
}
settingsLanguages[localStorage.getItem('index')].selected = true;


function setLanguage(language) {
    if (language === undefined) {
        localStorage.setItem('language', 'en');
        language = 'en';
    } else {
        localStorage.setItem('language', language);
    }
}

settings.addEventListener('click', () => {
    slider.classList.toggle('open');
});

settingsLanguages.addEventListener('change', () => {
    let language = settingsLanguages.options[settingsLanguages.selectedIndex].value;
    console.log(language)
    setLanguage(language);


    for (let i = 0; i < settingsLanguages.length; i++) {
        if (settingsLanguages[i].value == localStorage.getItem('language')) {
            localStorage.setItem('index', i);
            language = settingsLanguages[i].value;
        }
    }

    document.location.reload()
});


const switchTime = document.querySelector('#time');
const switchDate = document.querySelector('#date');
const switchGreeting = document.querySelector('#greeting');
const switchQuote = document.querySelector('#quote');
const switchWeather = document.querySelector('#weather');
const switchAudio = document.querySelector('#audio');

const time = document.querySelector('.time'),
    date = document.querySelector('.date'),
    greeting = document.querySelector('.greeting-container'),
    quete = document.querySelector('.quete-container'),
    weather = document.querySelector('.weather'),
    player = document.querySelector('.player');



const states = [
    [time, date, greeting, quete, weather, player],
    [switchTime, switchDate, switchGreeting, switchQuote, switchWeather, switchAudio]
]


let state = {
    'switchTime': 1,
    'switchDate': 1,
    'switchGreeting': 1,
    'switchQuote': 1,
    'switchWeather': 1,
    'switchAudio': 1
}

function setSettings() {
    if (localStorage.getItem('settings') === null) {
        localStorage.setItem('settings', JSON.stringify(state));
    } else {
        const newState = JSON.parse(localStorage.getItem('settings'));
        let i = 0;

        for (let item in newState) {
            if (newState[item] !== 1) {
                states[0][i].classList.toggle('hide-element');
                states[1][i].checked = false;
            }
            i++;
        }

        state = newState;
    }
}

function setState(selector) {
    if (state[selector] === 1) {
        state[selector] = 0;
    }
    else if (state[selector] === 0) {
        state[selector] = 1;
    }

    localStorage.setItem('settings', JSON.stringify(state));
}


function toggleItem(switcher, item, state) {
    switcher.addEventListener('click', () => {
        item.classList.toggle('hide-element');
        setState(state);
    });
}

toggleItem(switchTime, time, 'switchTime');
toggleItem(switchDate, date, 'switchDate');
toggleItem(switchGreeting, greeting, 'switchGreeting');
toggleItem(switchQuote, quete, 'switchQuote');
toggleItem(switchWeather, weather, 'switchWeather');
toggleItem(switchAudio, player, 'switchAudio');


export { settings, setSettings }


