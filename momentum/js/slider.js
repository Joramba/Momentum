function getSlideNext(num) {
    if (num == 20) {
        console.log(1)
        return 1;
    } else {
        console.log(num + 1)
        return num + 1;
    }
}

function getSlidePrev(num) {
    if (num == 1) {
        console.log(20)
        return 20;
    } else {
        console.log(num - 1)
        return num - 1;
    }
}

export { getSlideNext, getSlidePrev }