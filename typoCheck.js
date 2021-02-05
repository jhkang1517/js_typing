const aswr = document.querySelector(".answer");

function resetColor(){
    var step;
    for (step = 0; step < quest.childNodes.length; step++) {
        quest.children[step].className = UNCOMPLETE;
    }
}

function updateAnswer() {
    const checkList = aswr.value;
    const lencheckList = checkList.length;
    const nowPosition = checkList[lencheckList-1];

    resetColor();

    var step;
    for (step = 0; step < lencheckList; step++) {

        // answer 문장 글자 수가  question 문장 글자 수를 초과할 경우, 어떻게 해야할 것인가?

        if (quest.textContent[step] === checkList[step]) {
            quest.children[step].className = COMPLETE;
        } 
         else {
            quest.children[step].className = WRONG;
        }
    }

}

function focusInput(){
    aswr.addEventListener("keyup", updateAnswer)
}

function init() {
    focusInput();
}

init();