// first row
let audio1 = new Audio("./notes/1.wav")
let audio1b = new Audio("./notes/1b.wav")
let audio2 = new Audio("./notes/2.wav")
let audio2b = new Audio("./notes/2b.wav")
let audio3 = new Audio("./notes/3.wav")
let audio4 = new Audio("./notes/4.wav")
let audio4b = new Audio("./notes/4b.wav")
let audio5 = new Audio("./notes/5.wav")
let audio5b = new Audio("./notes/5b.wav")
let audio6 = new Audio("./notes/6.wav")
let audio6b = new Audio("./notes/6b.wav")
let audio7 = new Audio("./notes/7.wav")
let audio8 = new Audio("./notes/8.wav")
let audio8b = new Audio("./notes/8b.wav")
let audio9 = new Audio("./notes/9.wav")
let audio9b = new Audio("./notes/9b.wav")
let audio0 = new Audio("./notes/0.wav")


// second row
let audioA = new Audio("./notes/a.wav")
let audioAb = new Audio("./notes/Ab.wav")
let audioZ = new Audio("./notes/z.wav")
let audioZb = new Audio("./notes/Zb.wav")
let audioE = new Audio("./notes/e.wav")
let audioEb = new Audio("./notes/Eb.wav")
let audioR = new Audio("./notes/r.wav")
let audioT = new Audio("./notes/t.wav")
let audioTb = new Audio("./notes/Tb.wav")
let audioY = new Audio("./notes/y.wav")
let audioYb = new Audio("./notes/Yb.wav")
let audioU = new Audio("./notes/u.wav")
let audioI = new Audio("./notes/i.wav")
let audioIb = new Audio("./notes/Ib.wav")
let audioO = new Audio("./notes/o.wav")
let audioOb = new Audio("./notes/Ob.wav")
let audioP = new Audio("./notes/p.wav")
let audioPb = new Audio("./notes/Pb.wav")

// third row
let audioQ = new Audio("./notes/q.wav")
let audioS = new Audio("./notes/s.wav")
let audioSb = new Audio("./notes/Sb.wav")
let audioD = new Audio("./notes/d.wav")
let audioDb = new Audio("./notes/Db.wav")
let audioF = new Audio("./notes/f.wav")
let audioG = new Audio("./notes/g.wav")
let audioGb = new Audio("./notes/Gb.wav")
let audioH = new Audio("./notes/h.wav")
let audioHb = new Audio("./notes/Hb.wav")
let audioJ = new Audio("./notes/j.wav")
let audioJb = new Audio("./notes/Jb.wav")
let audioK = new Audio("./notes/k.wav")
let audioL = new Audio("./notes/l.wav")
let audioLb = new Audio("./notes/Lb.wav")
let audioM = new Audio("./notes/m.wav")
let audioMb = new Audio("./notes/Mb.wav")

// fourth row
let audioW = new Audio("./notes/w.wav")
let audioX = new Audio("./notes/x.wav")
let audioXb = new Audio("./notes/Xb.wav")
let audioC = new Audio("./notes/c.wav")
let audioCb = new Audio("./notes/Cb.wav")
let audioV = new Audio("./notes/v.wav")
let audioVb = new Audio("./notes/Vb.wav")
let audioB = new Audio("./notes/b.wav")
let audioN = new Audio("./notes/n.wav")

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        // first row white keys
        case '&':
            document.getElementById("1").classList.add("active")
            if (audio1.paused) {
                audio1.play()
            } else {
                audio1.play()
                audio1.currentTime = 0
            }
            break;
        case 'é':
            document.getElementById("2").classList.add("active")
            if (audio2.paused) {
                audio2.play()
            } else {
                audio2.play()
                audio2.currentTime = 0
            }
            break;
        case '"':
            document.getElementById("3").classList.add("active")
            if (audio3.paused) {
                audio3.play()
            } else {
                audio3.play()
                audio3.currentTime = 0
            }
            break;
        case '\'':
            document.getElementById("4").classList.add("active")
            if (audio4.paused) {
                audio4.play()
            } else {
                audio4.play()
                audio4.currentTime = 0
            }
            break;
        case '(':
            document.getElementById("5").classList.add("active")
            if (audio5.paused) {
                audio5.play()
            } else {
                audio5.play()
                audio5.currentTime = 0
            }
            break;
        case '§':
            document.getElementById("6").classList.add("active")
            if (audio6.paused) {
                audio6.play()
            } else {
                audio6.play()
                audio6.currentTime = 0
            }
            break;
        case 'è':
            document.getElementById("7").classList.add("active")
            if (audio7.paused) {
                audio7.play()
            } else {
                audio7.play()
                audio7.currentTime = 0
            }
            break;
        case '!':
            document.getElementById("8").classList.add("active")
            if (audio8.paused) {
                audio8.play()
            } else {
                audio8.play()
                audio8.currentTime = 0
            }
            break;
        case 'ç':
            document.getElementById("9").classList.add("active")
            if (audio9.paused) {
                audio9.play()
            } else {
                audio9.play()
                audio9.currentTime = 0
            }
            break;
        case 'à':
            document.getElementById("0").classList.add("active")
            if (audio0.paused) {
                audio0.play()
            } else {
                audio0.play()
                audio0.currentTime = 0
            }
            break;

        // second row white keys
        case 'a':
            document.getElementById("a").classList.add("active")
            if (audioA.paused) {
                audioA.play()
            } else {
                audioA.play()
                audioA.currentTime = 0
            }
            break;
        case 'z':
            document.getElementById("z").classList.add("active")
            if (audioZ.paused) {
                audioZ.play()
            } else {
                audioZ.play()
                audioZ.currentTime = 0
            }
            break;
        case 'e':
            document.getElementById("e").classList.add("active")
            if (audioE.paused) {
                audioE.play()
            } else {
                audioE.play()
                audioE.currentTime = 0
            }
            break;
        case 'r':
            document.getElementById("r").classList.add("active")
            if (audioR.paused) {
                audioR.play()
            } else {
                audioR.play()
                audioR.currentTime = 0
            }
            break;
        case 't':
            document.getElementById("t").classList.add("active")
            if (audioT.paused) {
                audioT.play()
            } else {
                audioT.play()
                audioT.currentTime = 0
            }
            break;
        case 'y':
            document.getElementById("y").classList.add("active")
            if (audioY.paused) {
                audioY.play()
            } else {
                audioY.play()
                audioY.currentTime = 0
            }
            break;
        case 'u':
            document.getElementById("u").classList.add("active")
            if (audioU.paused) {
                audioU.play()
            } else {
                audioU.play()
                audioU.currentTime = 0
            }
            break;
        case 'i':
            document.getElementById("i").classList.add("active")
            if (audioI.paused) {
                audioI.play()
            } else {
                audioI.play()
                audioI.currentTime = 0
            }
            break;
        case 'o':
            document.getElementById("o").classList.add("active")
            if (audioO.paused) {
                audioO.play()
            } else {
                audioO.play()
                audioO.currentTime = 0
            }
            break;
        case 'p':
            document.getElementById("p").classList.add("active")
            if (audioP.paused) {
                audioP.play()
            } else {
                audioP.play()
                audioP.currentTime = 0
            }
            break;

        // third row white keys
        case 'q':
            document.getElementById("q").classList.add("active")
            if (audioQ.paused) {
                audioQ.play()
            } else {
                audioQ.play()
                audioQ.currentTime = 0
            }
            break;
        case 's':
            document.getElementById("s").classList.add("active")
            if (audioS.paused) {
                audioS.play()
            } else {
                audioS.play()
                audioS.currentTime = 0
            }
            break;
        case 'd':
            document.getElementById("d").classList.add("active")
            if (audioD.paused) {
                audioD.play()
            } else {
                audioD.play()
                audioD.currentTime = 0
            }   
            break;
        case 'f':
            document.getElementById("f").classList.add("active")
            if (audioF.paused) {
                audioF.play()
            } else {
                audioF.play()
                audioF.currentTime = 0
            }
            break;
        case 'g':
            document.getElementById("g").classList.add("active")
            if (audioG.paused) {
                audioG.play()
            } else {
                audioG.play()
                audioG.currentTime = 0
            }
            break;
        case 'h':
            document.getElementById("h").classList.add("active")
            if (audioH.paused) {
                audioH.play()
            } else {
                audioH.play()
                audioH.currentTime = 0
            }
            break;
        case 'j':
            document.getElementById("j").classList.add("active")
            if (audioJ.paused) {
                audioJ.play()
            } else {
                audioJ.play()
                audioJ.currentTime = 0
            }
            break;
        case 'k':
            document.getElementById("k").classList.add("active")
            if (audioK.paused) {
                audioK.play()
            } else {
                audioK.play()
                audioK.currentTime = 0
            }
            break;
        case 'l':
            document.getElementById("l").classList.add("active")
            if (audioL.paused) {
                audioL.play()
            } else {
                audioL.play()
                audioL.currentTime = 0
            }
            break;
        case 'm':
            document.getElementById("m").classList.add("active")
            if (audioM.paused) {
                audioM.play()
            } else {
                audioM.play()
                audioM.currentTime = 0
            }
            break;

        // fourth row white keys
        case 'w':
            document.getElementById("w").classList.add("active")
            if (audioW.paused) {
                audioW.play()
            } else {
                audioW.play()
                audioW.currentTime = 0
            }
            break;
        case 'x':
            document.getElementById("x").classList.add("active")
            if (audioX.paused) {
                audioX.play()
            } else {
                audioX.play()
                audioX.currentTime = 0
            }
            break;
        case 'c':
            document.getElementById("c").classList.add("active")
            if (audioC.paused) {
                audioC.play()
            } else {
                audioC.play()
                audioC.currentTime = 0
            }
            break;
        case 'v':
            document.getElementById("v").classList.add("active")
            if (audioV.paused) {
                audioV.play()
            } else {
                audioV.play()
                audioV.currentTime = 0
            }
            break;
        case 'b':
            document.getElementById("b").classList.add("active")
            if (audioB.paused) {
                audioB.play()
            } else {
                audioB.play()
                audioB.currentTime = 0
            }
            break;
        case 'n':
            document.getElementById("n").classList.add("active")
            if (audioN.paused) {
                audioN.play()
            } else {
                audioN.play()
                audioN.currentTime = 0
            }
            break;

        // first row black keys
        case '1':
            document.getElementById("1b").classList.add("active")
            if (audio1b.paused) {
                audio1b.play()
            } else {
                audio1b.play()
                audio1b.currentTime = 0
            }
            break;
        case '2':
            document.getElementById("2b").classList.add("active")
            if (audio2b.paused) {
                audio2b.play()
            } else {
                audio2b.play()
                audio2b.currentTime = 0
            }
            break;
        case '4':
            document.getElementById("4b").classList.add("active")
            if (audio4b.paused) {
                audio4b.play()
            } else {
                audio4b.play()
                audio4b.currentTime = 0
            }
            break;
        case '5':
            document.getElementById("5b").classList.add("active")
            if (audio5b.paused) {
                audio5b.play()
            } else {
                audio5b.play()
                audio5b.currentTime = 0
            }
            break;
        case '6':
            document.getElementById("6b").classList.add("active")
            if (audio6b.paused) {
                audio6b.play()
            } else {
                audio6b.play()
                audio6b.currentTime = 0
            }
            break;
        case '8':
            document.getElementById("8b").classList.add("active")
            if (audio8b.paused) {
                audio8b.play()
            } else {
                audio8b.play()
                audio8b.currentTime = 0
            }
            break;
        case '9':
            document.getElementById("9b").classList.add("active")
            if (audio9b.paused) {
                audio9b.play()
            } else {
                audio9b.play()
                audio9b.currentTime = 0
            }
            break;

        // second row black keys
        case 'A':
            document.getElementById("Ab").classList.add("active")
            if (audioAb.paused) {
                audioAb.play()
            } else {
                audioAb.play()
                audioAb.currentTime = 0
            }
            break;
        case 'Z':
            document.getElementById("Zb").classList.add("active")
            if (audioZb.paused) {
                audioZb.play()
            } else {
                audioZb.play()
                audioZb.currentTime = 0
            }
            break;
        case 'E':
            document.getElementById("Eb").classList.add("active")
            if (audioEb.paused) {
                audioEb.play()
            } else {
                audioEb.play()
                audioEb.currentTime = 0
            }
            break;
        case 'T':
            document.getElementById("Tb").classList.add("active")
            if (audioTb.paused) {
                audioTb.play()
            } else {
                audioTb.play()
                audioTb.currentTime = 0
            }
            break;
        case 'Y':
            document.getElementById("Yb").classList.add("active")
            if (audioYb.paused) {
                audioYb.play()
            } else {
                audioYb.play()
                audioYb.currentTime = 0
            }
            break;
        case 'I':
            document.getElementById("Ib").classList.add("active")
            if (audioIb.paused) {
                audioIb.play()
            } else {
                audioIb.play()
                audioIb.currentTime = 0
            }
            break;
        case 'O':
            document.getElementById("Ob").classList.add("active")
            if (audioOb.paused) {
                audioOb.play()
            } else {
                audioOb.play()
                audioOb.currentTime = 0
            }
            break;
        case 'P':
            document.getElementById("Pb").classList.add("active")
            if (audioPb.paused) {
                audioPb.play()
            } else {
                audioPb.play()
                audioPb.currentTime = 0
            }
            break;

        // third row black keys
        case 'S':
            document.getElementById("Sb").classList.add("active")
            if (audioSb.paused) {
                audioSb.play()
            } else {
                audioSb.play()
                audioSb.currentTime = 0
            }
            break;
        case 'D':
            document.getElementById("Db").classList.add("active")
            if (audioDb.paused) {
                audioDb.play()
            } else {
                audioDb.play()
                audioDb.currentTime = 0
            }
            break;
        case 'G':
            document.getElementById("Gb").classList.add("active")
            if (audioGb.paused) {
                audioGb.play()
            } else {
                audioGb.play()
                audioGb.currentTime = 0
            }
            break;
        case 'H':
            document.getElementById("Hb").classList.add("active")
            if (audioHb.paused) {
                audioHb.play()
            } else {
                audioHb.play()
                audioHb.currentTime = 0
            }
            break;
        case 'J':
            document.getElementById("Jb").classList.add("active")
            if (audioJb.paused) {
                audioJb.play()
            } else {
                audioJb.play()
                audioJb.currentTime = 0
            }
            break;
        case 'L':
            document.getElementById("Lb").classList.add("active")
            if (audioLb.paused) {
                audioLb.play()
            } else {
                audioLb.play()
                audioLb.currentTime = 0
            }
            break;
        case 'M':
            document.getElementById("Mb").classList.add("active")
            if (audioMb.paused) {
                audioMb.play()
            } else {
                audioMb.play()
                audioMb.currentTime = 0
            }
            break;

        // fourth row black keys
        case 'X':
            document.getElementById("Xb").classList.add("active")
            if (audioXb.paused) {
                audioXb.play()
            } else {
                audioXb.play()
                audioXb.currentTime = 0
            }
            break;
        case 'C':
            document.getElementById("Cb").classList.add("active")
            if (audioCb.paused) {
                audioCb.play()
            } else {
                audioCb.play()
                audioCb.currentTime = 0
            }
            break;
        case 'V':
            document.getElementById("Vb").classList.add("active")
            if (audioVb.paused) {
                audioVb.play()
            } else {
                audioVb.play()
                audioVb.currentTime = 0
            }
            break;

        default:
            break;
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        // first row white keys
        case '&':
            document.getElementById("1").classList.remove("active")
            break;
        case 'é':
            document.getElementById("2").classList.remove("active")
            break;
        case '"':
            document.getElementById("3").classList.remove("active")
            break;
        case '\'':
            document.getElementById("4").classList.remove("active")
            break;
        case '(':
            document.getElementById("5").classList.remove("active")
            break;
        case '§':
            document.getElementById("6").classList.remove("active")
            break;
        case 'è':
            document.getElementById("7").classList.remove("active")
            break;
        case '!':
            document.getElementById("8").classList.remove("active")
            break;
        case 'ç':
            document.getElementById("9").classList.remove("active")
            break;
        case 'à':
            document.getElementById("0").classList.remove("active")
            break;

        // second row white keys
        case 'a':
            document.getElementById("a").classList.remove("active")
            break;
        case 'z':
            document.getElementById("z").classList.remove("active")
            break;
        case 'e':
            document.getElementById("e").classList.remove("active")
            break;
        case 'r':
            document.getElementById("r").classList.remove("active")
            break;
        case 't':
            document.getElementById("t").classList.remove("active")
            break;
        case 'y':
            document.getElementById("y").classList.remove("active")
            break;
        case 'u':
            document.getElementById("u").classList.remove("active")
            break;
        case 'i':
            document.getElementById("i").classList.remove("active")
            break;
        case 'o':
            document.getElementById("o").classList.remove("active")
            break;
        case 'p':
            document.getElementById("p").classList.remove("active")
            break;

        // third row white keys
        case 'q':
            document.getElementById("q").classList.remove("active")
            break;
        case 's':
            document.getElementById("s").classList.remove("active")
            break;
        case 'd':
            document.getElementById("d").classList.remove("active")
            break;
        case 'f':
            document.getElementById("f").classList.remove("active")
            break;
        case 'g':
            document.getElementById("g").classList.remove("active")
            break;
        case 'h':
            document.getElementById("h").classList.remove("active")
            break;
        case 'j':
            document.getElementById("j").classList.remove("active")
            break;
        case 'k':
            document.getElementById("k").classList.remove("active")
            break;
        case 'l':
            document.getElementById("l").classList.remove("active")
            break;
        case 'm':
            document.getElementById("m").classList.remove("active")
            break;

        // fourth row white keys
        case 'w':
            document.getElementById("w").classList.remove("active")
            break;
        case 'x':
            document.getElementById("x").classList.remove("active")
            break;
        case 'c':
            document.getElementById("c").classList.remove("active")
            break;
        case 'v':
            document.getElementById("v").classList.remove("active")
            break;
        case 'b':
            document.getElementById("b").classList.remove("active")
            break;
        case 'n':
            document.getElementById("n").classList.remove("active")
            break;

        // first row black keys
        case '1':
            document.getElementById("1b").classList.remove("active")
            break;
        case '2':
            document.getElementById("2b").classList.remove("active")
            break;
        case '4':
            document.getElementById("4b").classList.remove("active")
            break;
        case '5':
            document.getElementById("5b").classList.remove("active")
            break;
        case '6':
            document.getElementById("6b").classList.remove("active")
            break;
        case '8':
            document.getElementById("8b").classList.remove("active")
            break;
        case '9':
            document.getElementById("9b").classList.remove("active")
            break;

        // second row black keys
        case 'A':
            document.getElementById("Ab").classList.remove("active")
            break;
        case 'Z':
            document.getElementById("Zb").classList.remove("active")
            break;
        case 'E':
            document.getElementById("Eb").classList.remove("active")
            break;
        case 'T':
            document.getElementById("Tb").classList.remove("active")
            break;
        case 'Y':
            document.getElementById("Yb").classList.remove("active")
            break;
        case 'I':
            document.getElementById("Ib").classList.remove("active")
            break;
        case 'O':
            document.getElementById("Ob").classList.remove("active")
            break;
        case 'P':
            document.getElementById("Pb").classList.remove("active")
            break;

        // third row black keys
        case 'S':
            document.getElementById("Sb").classList.remove("active")
            break;
        case 'D':
            document.getElementById("Db").classList.remove("active")
            break;
        case 'G':
            document.getElementById("Gb").classList.remove("active")
            break;
        case 'H':
            document.getElementById("Hb").classList.remove("active")
            break;
        case 'J':
            document.getElementById("Jb").classList.remove("active")
            break;
        case 'L':
            document.getElementById("Lb").classList.remove("active")
            break;
        case 'M':
            document.getElementById("Mb").classList.remove("active")
            break;

        // fourth row black keys
        case 'X':
            document.getElementById("Xb").classList.remove("active")
            break;
        case 'C':
            document.getElementById("Cb").classList.remove("active")
            break;
        case 'V':
            document.getElementById("Vb").classList.remove("active")
            break;
        case 'B':
            document.getElementById("Bb").classList.remove("active")
            break;
        case 'N':
            document.getElementById("Nb").classList.remove("active")
            break;

        default:
            break;
    }
})