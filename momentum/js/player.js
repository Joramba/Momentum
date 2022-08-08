import playList from './playList.js';

const audio = new Audio();
const playButton = document.querySelector('.play');

function createLi() {
    const playerList = document.querySelector('.play-list');

    playList.forEach(el => {
        let li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = el.title;
        playerList.append(li);
    })
}

function playAudio(isPlay) {
    audio.src = playList[1].src;

    if (isPlay) {
        audio.pause();
    }
    else {
        audio.play();
    }
}

function toggleBtn() {
    playButton.classList.toggle('pause');
}


function togglePlay() {
    return audio.paused ? audio.play() : audio.pause();
};

export { createLi, playAudio, toggleBtn }