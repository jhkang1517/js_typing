const key = document.querySelector(".answer");
const kbdLayout = document.querySelector(".lightKeyboard")

const PRESSED = "pressed";

function keyboardEventChecker() {
    key.addEventListener("keydown", function(k){
        const keyName = k.key;
        const keyCode = k.keyCode;

        console.log(k.key)

        const light = document.getElementsByClassName("light" + keyName.toUpperCase());
            
            var step;
            for (step = 0; step < light.length; step++) {
                light[step].classList.add(PRESSED);
            }
    })

    key.addEventListener("keyup", function(k){
        const keyName = k.key;
        const keyCode = k.keyCode;

        const light = document.getElementsByClassName("light" + keyName.toUpperCase());
            
            var step;
            for (step = 0; step < light.length; step++) {
                light[step].classList.remove(PRESSED);
            }
    })
}


function init() {
    keyboardEventChecker();
}

init();
