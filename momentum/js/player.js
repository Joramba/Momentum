import playList from './playList.js';

const audio = new Audio();
audio.volume = 0.75;

const playButton = document.querySelector('.play'),
    playNext = document.querySelector('.play-next'),
    playPrev = document.querySelector('.play-prev'),
    volume = document.querySelector('.volume'),
    volumeSlider = document.querySelector(".volume-slider"),
    volumePercentage = document.querySelector(".volume-percentage"),
    progressBar = document.querySelector(".progress"),
    timeline = document.querySelector(".timeline"),
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

    if (audio.src == '') {
        audio.src = playList[playNum].src;
    }

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
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

volume.addEventListener('click', () => {
    audio.muted = !audio.muted;
    volume.classList.toggle('icono-volumeMedium');
    volume.classList.toggle('icono-volumeMute');

    if (audio.muted === true) {
        volumePercentage.style.width = 0 + '%';
    }
    else {
        volumePercentage.style.width = audio.volume * 100 + '%';
    }
});

volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    volumePercentage.style.width = newVolume * 100 + '%';
    if (audio.muted) {
        audio.muted = !audio.muted;
    }
}, false);


timeline.addEventListener("click", (e) => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);


setInterval(() => {
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
}, 500);


export { createLi, playAudio, toggleBtn }