const key = document.querySelector(".answer");
const kbdLayout = document.querySelector(".lightKeyboard")

const PRESSED = "pressed";

function keyboardEventChecker() {
    key.addEventListener("keydown", function(k){
        const keyName = k.key;
        const light = document.getElementsByClassName("light" + keyName.toUpperCase());
            
            var step;
            for (step = 0; step < light.length; step++) {
                // light[step].classList.add(PRESSED); // class 추가는 css 우선순위 문제로 작동을 안함.. 왜..?
                light[step].style = "color: rgb(255, 187, 0)" // style 추가로 대체
            }
    })

    key.addEventListener("keyup", function(k){
        const keyName = k.key;
        const light = document.getElementsByClassName("light" + keyName.toUpperCase());
            
            var step;
            for (step = 0; step < light.length; step++) {
                // light[step].classList.remove(PRESSED); // class 추가는 css 우선순위 문제로 작동을 안함.. 왜..?
                light[step].style = ""
            }
    })
}


function init() {
    keyboardEventChecker();
}

init();
