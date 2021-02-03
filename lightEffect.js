const key = document.querySelector(".answer");
const kbdLayout = document.querySelector(".lightKeyboard")

const PRESSED = "pressed";
const PULLED = "pulled";

function keyboardEventChecker() {
    key.addEventListener("keydown", function(k){
        const keyName = k.key;
        const keyCode = k.keyCode;

        if (keyName === "a") {

            console.log(kbdLayout.childNodes)

            const light = kbdLayout.childNodes[1]
            light.classList.add(PRESSED)

        }
        // console.log(`pushed ${k.key}, and this keyCode is ${keyCode}`)
    })

    key.addEventListener("keyup", function(k){
        const keyName = k.key;
        const keyCode = k.keyCode;

        if (keyName === "a") {

            const light = kbdLayout.childNodes[1]
            light.classList.remove(PRESSED)

        }
        // console.log(`pushed ${k.key}, and this keyCode is ${keyCode}`)
    })
}


function init() {
    keyboardEventChecker();
}

init();