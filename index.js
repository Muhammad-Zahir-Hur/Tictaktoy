let btns = document.querySelectorAll('button')
let won;

let btn1;
let btn2;
let btn3;
let btn4;
let btn5;
let btn6;
let btn7;
let btn8;
let btn9;

// let avBtns = []

// function checkAvailability(){
//     for (let i = 0; i < btns.length; i++) {
//         if (btns[i].innerText != "") {
//             avBtns.push(btns[i])
//         }}} 

function text(This) {
    if (!This.innerText == "") {
        return
    }
    This.style.backgroundColor = "rgb(164, 245, 42)"
    This.innerText = "X";
    setTimeout(() => {
        checkForWin()
        compTurn();
        if (!won) {
            checkForWin()
        }
    }, 500);
}
function compTurn() {
    btnByComp = Math.round(Math.random() * btns.length - 1)
    if (btnByComp == -1) {
        btnByComp++;
    }

    let able;
    btns.forEach(element => {
        if (!able) {
            if (element.innerText == "") {
                able = true;
                console.log("able");

            }
        }
    });
if (able) {
    if (btns[btnByComp].innerText != "") {
        console.log(" in the if block");
        compTurn()
    } else {
        btns[btnByComp].innerText = "Y"
        btns[btnByComp].style.background = "red"
        console.log("in the else block");
    }
}
}
let userWin;
let compWin;
[case1, case2, case3, case4, case5, case6, case7, case8] = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [7, 8, 9]]
function checkForWin() {

    btns.forEach((element, index) => {
        index++;

        switch (index) {
            case 1:
                btn1 = element.innerText;
                console.log(element.innerText);
            case 2:
                btn2 = element.innerText;
            case 3:
                btn3 = element.innerText;
            case 4:
                btn4 = element.innerText;
            case 5:
                btn5 = element.innerText;
            case 6:
                btn6 = element.innerText;
            case 7:
                btn7 = element.innerText;
            case 8:
                btn8 = element.innerText;
            case 9:
                btn9 = element.innerText;
            default:
                break;
        }
    })
    if (btn1 == btn2) {
        if (btn2 == btn3) {
            if (btn1 == "X") {
                alert("user Won");
                won = true;
            } else if (btn1 == "Y") {
                alert("computer Won")
                won = true;
            }
        }
    }

    if (btn1 == btn4) {
        if (btn4 == btn7) {
            if (btn1 == "X") {
                alert("user Won");
                won = true;
            } else if (btn1 == "Y") {
                alert("computer Won")
                won = true;
            }
        }
    }

    if (btn1 == btn5) {
        if (btn5 == btn9) {
            if (btn1 == "X") {
                alert("user Won");
                won = true;
            } else if (btn1 == "Y") {
                alert("computer Won")
                won = true;
            }
        }
    }

    if (btn2 == btn5) {
        if (btn5 == btn8) {
            if (btn2 == "X") {
                alert("user Won");
                won = true;
            } else if (btn2 == "Y") {
                alert("computer Won")
                won = true;
            }
        }
    }

    if (btn3 == btn6) {
        if (btn6 == btn9) {
            if (btn3 == "X") {
                alert("user Won");
                won = true;
            } else if (btn3 == "Y") {
                alert("computer Won")
                won = true;
            }
        }
    }

    if (btn3 == btn5) {
        if (btn5 == btn7) {
            if (btn3 == "X") {
                alert("user Won");
                won = true;
            } else if (btn3 == "Y") {
                alert("computer Won")
                won = true;
            }
        }
    }

    if (btn4 == btn5) {
        if (btn5 == btn6) {
            if (btn4 == "X") {
                alert("user Won");
                won = true;
            } else if (btn4 == "Y") {
                alert("computer Won")
                won = true;
            }
        }
    }

    if (btn7 == btn8) {
        if (btn8 == btn9) {
            if (btn7 == "X") {
                alert("user Won");
                won = true;
            } else if (btn7 == "Y") {
                alert("computer Won")
                won = true;
            }
        }
    }


}






// || btn1 == btn4 == btn7 ||btn1 == btn5 == btn9 || btn2 == btn8 == btn5 || btn3 == btn6 == btn9 ||btn3 == btn5 == btn7|| btn4 == btn5 == btn6 ||btn7 == btn8 == btn9