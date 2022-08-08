import playList from './playList.js';

const audio = new Audio();

const playButton = document.querySelector('.play'),
    playNext = document.querySelector('.play-next'),
    playPrev = document.querySelector('.play-prev'),
    playerLength = playList.length;


let playNum = 0,
    isPlay = false;

function createLi() {
    const playerList = document.querySelector('.play-list');
    let i = 1;

    playList.forEach(el => {
        let li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = `${i++}. ${el.title}`;
        playerList.append(li);
    })
}

function playAudio(isPlay) {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;

    if (isPlay) {
        audio.play();
    }
    else {
        audio.pause();
    }
}

function toggleBtn() {
    playButton.classList.toggle('pause');
}

playButton.addEventListener('click', () => {
    const playerItem = document.querySelectorAll('.play-item');
    playerItem[playNum].classList.add('item-active');

    toggleBtn();
    isPlay = !isPlay;
    playAudio(isPlay);
});

playNext.addEventListener('click', () => {
    const playerItem = document.querySelectorAll('.play-item');
    playerItem[playNum].classList.remove('item-active');

    if (playNum > playerLength - 2) {
        playNum = 0;
    } else {
        playNum++;
    }

    playerItem[playNum].classList.add('item-active');

    if (isPlay) {
        playAudio(isPlay);

    }
    else {
        toggleBtn();
        isPlay = !isPlay;
        playAudio(isPlay);
    }
});

playPrev.addEventListener('click', () => {
    const playerItem = document.querySelectorAll('.play-item');
    playerItem[playNum].classList.remove('item-active');

    if (playNum <= 0) {
        playNum = playerLength - 1;
    } else {
        playNum--;
    }

    playerItem[playNum].classList.add('item-active');

    if (isPlay) {
        playAudio(isPlay);

    }
    else {
        toggleBtn();
        isPlay = !isPlay;
        playAudio(isPlay);
    }

});


export { createLi, playAudio, toggleBtn }