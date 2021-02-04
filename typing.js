const aswr = document.querySelector(".answer");

function updateAnswer() {
    const checkList = aswr.value;
    const lencheckList = checkList.length;

    console.log(quest);

    var step;
    for (step = 0; step < lencheckList; step++) {

        if (quest.textContent[step] === checkList[step]) {
            quest.children[step].className = COMPLETE;
        } else {
            quest.children[step].className = WRONG;
        }
    }


    // console.log(aswr.value);
}

function focusInput(){
    console.log(aswr.textContent);
    console.log(quest.textContent);

    aswr.addEventListener("keyup", updateAnswer)

}

function init() {
    focusInput();
}

init();