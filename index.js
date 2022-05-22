let audio1 = new Audio("./notes/key01.wav")
let audio2 = new Audio("./notes/key02.wav")
let audio3 = new Audio("./notes/key03.wav")
let audio4 = new Audio("./notes/key04.wav")
let audio5 = new Audio("./notes/key05.wav")
let audio6 = new Audio("./notes/key06.wav")
let audio7 = new Audio("./notes/key07.wav")
let audio8 = new Audio("./notes/key08.wav")

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 's':
            document.getElementById("1").classList.add("wactive")
            if (audio1.paused) {
                audio1.play()
            } else {
                audio1.play()
                audio1.currentTime = 0
            }
            break;
        case 'd':
            document.getElementById("2").classList.add("wactive")
            if (audio2.paused) audio2.play()
            else {
                audio2.play()
                audio2.currentTime = 0
            }
            break;
        case 'f':
            document.getElementById("3").classList.add("wactive")
            if (audio3.paused) audio3.play()
            else {
                audio3.play()
                audio3.currentTime = 0
            }
            break;
        case 'g':
            document.getElementById("4").classList.add("wactive")
            if (audio4.paused) audio4.play()
            else {
                audio4.play()
                audio4.currentTime = 0
            }
            break;
        case 'h':
            document.getElementById("5").classList.add("wactive")
            if (audio5.paused) audio5.play()
            else {
                audio5.play()
                audio5.currentTime = 0
            }
            break;
        case 'j':
            document.getElementById("6").classList.add("wactive")
        if (audio6.paused) audio6.play()
            else {
                audio6.play()
                audio6.currentTime = 0
            }
            break;
        case 'k':
            document.getElementById("7").classList.add("wactive")
            if (audio7.paused) audio7.play()
            else {
                audio7.play()
                audio7.currentTime = 0
            }
        case 'l':
            document.getElementById("8").classList.add("wactive")
            if (audio8.paused) audio8.play()
            else {
                audio8.play()
                audio8.currentTime = 0
            }

        case 'e':
            document.getElementById("b1").classList.add("bactive")
            if (audio9.paused) audio9.play()
            else {
                audio9.play()
                audio9.currentTime = 0
            }
            break;
        case 'r':
            document.getElementById("b2").classList.add("bactive")
            if (audio10.paused) audio10.play()
            else {
                audio10.play()
                audio10.currentTime = 0
            }
            break;
        case 'y':
            document.getElementById("b3").classList.add("bactive")
            if (audio11.paused) audio11.play()
            else {
                audio11.play()
                audio11.currentTime = 0
            }
            break;
        case 'u':
            document.getElementById("b4").classList.add("bactive")
            if (audio12.paused) audio12.play()
            else {
                audio12.play()
                audio12.currentTime = 0
            }
            break;
        case 'i':
            document.getElementById("b5").classList.add("bactive")
            if (audio13.paused) audio13.play()
            else {
                audio13.play()
                audio13.currentTime = 0
            }
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 's':
            document.getElementById("1").classList.remove("wactive")
            break;
        case 'd':
            document.getElementById("2").classList.remove("wactive")
            break;
        case 'f':
            document.getElementById("3").classList.remove("wactive")
            break;
        case 'g':
            document.getElementById("4").classList.remove("wactive")
            break;
        case 'h':
            document.getElementById("5").classList.remove("wactive")
            break;
        case 'j':
            document.getElementById("6").classList.remove("wactive")
            break;
        case 'k':
            document.getElementById("7").classList.remove("wactive")
            break;
        case 'l':
            document.getElementById("8").classList.remove("wactive")
            break;
        case 'e':
            document.getElementById("b1").classList.remove("bactive")
            break;
        case 'r':
            document.getElementById("b2").classList.remove("bactive")
            break;
        case 'y':
            document.getElementById("b3").classList.remove("bactive")
            break;
        case 'u':
            document.getElementById("b4").classList.remove("bactive")
            break;
        case 'i':
            document.getElementById("b5").classList.remove("bactive")
            break;
        default:
            break;
    }
})