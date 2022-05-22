let audio1 = new Audio("./notes/key01.mp3")
let audio2 = new Audio("./notes/key02.mp3")
let audio3 = new Audio("./notes/key03.mp3")
let audio4 = new Audio("./notes/key04.mp3")
let audio5 = new Audio("./notes/key05.mp3")
let audio6 = new Audio("./notes/key06.mp3")
let audio7 = new Audio("./notes/key07.mp3")
let audio8 = new Audio("./notes/key08.mp3")
let audio9 = new Audio("./notes/key09.mp3")
let audio10 = new Audio("./notes/key10.mp3")
let audio11 = new Audio("./notes/key11.mp3")
let audio12 = new Audio("./notes/key12.mp3")
let audio13 = new Audio("./notes/key13.mp3")
let audio14 = new Audio("./notes/key14.mp3")
let audio15 = new Audio("./notes/key15.mp3")
let audio16 = new Audio("./notes/key16.mp3")

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'q':
            if (audio1.paused) audio1.play()
            else {
                audio1.play()
                audio1.currentTime = 0
            }
            break;
        case 's':
        if (audio2.paused) audio2.play()
            else {
                audio2.play()
                audio2.currentTime = 0
            }
            break;
        case 'd':
        if (audio3.paused) audio3.play()
            else {
                audio3.play()
                audio3.currentTime = 0
            }
            break;
        case 'f':
        if (audio4.paused) audio4.play()
            else {
                audio4.play()
                audio4.currentTime = 0
            }
            break;
        case 'g':
        if (audio5.paused) audio5.play()
            else {
                audio5.play()
                audio5.currentTime = 0
            }
            break;
        case 'h':
        if (audio6.paused) audio6.play()
            else {
                audio6.play()
                audio6.currentTime = 0
            }
            break;
        case 'j':
        if (audio7.paused) audio7.play()
            else {
                audio7.play()
                audio7.currentTime = 0
            }
            break;
        case 'k':
        if (audio8.paused) audio8.play()
            else {
                audio8.play()
                audio8.currentTime = 0
            }
            break;
        case 'l':
        if (audio9.paused) audio9.play()
            else {
                audio9.play()
                audio9.currentTime = 0
            }
            break;
        case 'm':
            if (audio10.paused) audio10.play()
            else {
                audio10.play()
                audio10.currentTime = 0
            }
            break;
        case 'z':
            if (audio11.paused) audio11.play()
            else {
                audio11.play()
                audio11.currentTime = 0
            }
            break;
        case 'r':
            if (audio12.paused) audio12.play()
            else {
                audio12.play()
                audio12.currentTime = 0
            }
            break;
        case 't':
            if (audio13.paused) audio13.play()
            else {
                audio13.play()
                audio13.currentTime = 0
            }
            break;
        case 'y':
            if (audio14.paused) audio14.play()
            else {
                audio14.play()
                audio14.currentTime = 0
            }
            break;
        case 'u':
            if (audio15.paused) audio15.play()
            else {
                audio15.play()
                audio15.currentTime = 0
            }
            break;
        case 'o':
            if (audio16.paused) audio16.play()
            else {
                audio16.play()
                audio16.currentTime = 0
            }
            break;
        default:
            break;
}})
