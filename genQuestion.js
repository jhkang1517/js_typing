const quest = document.querySelector(".question"); // 영향을 미칠 html 코드를 가져오고
const questList = ["We have art in order not to die of the truth."
                 , "We make a living by what we get, but we make a life by what we give."
                 , "We know accurately only when we know little, with knowledge doubt increases."] // 넣을 값들

const COMPLETE = "complete";
const UNCOMPLETE = "uncomplete";
const WRONG = "wrong";

function pressEnter(event) {
    if(event.keyCode === 13){
        resetQuest();
        resetAnswer();
        randomQuestList();
    }
}

function genRandom() {
    const lenQuestList = questList.length; // index 접근을 위한 length check
    const number = Math.floor(Math.random() * lenQuestList);
    return number;
}

function resetAnswer() {
    aswr.value = null;
}

function resetQuest() {
    while (quest.hasChildNodes()){
        quest.removeChild(quest.firstChild);
    }
}

function randomQuestList() {
    // const charSpan = document.createElement('span'); // 값을 담을 태그 생성
    const randomNumber = genRandom();
    const question = questList[randomNumber].split("");

    var step;
    for (step = 0; step < question.length; step++) {
        const tempSpan = document.createElement('span');
        tempSpan.classList.add(UNCOMPLETE);
        tempSpan.innerText = question[step];
        quest.appendChild(tempSpan);
    } 
    
    // charSpan.innerText = questList[randomNumber] // 준비된 태그에 값 삽입 
    // quest.appendChild(charSpan) // 태그안에 태그 삽입 (화면출력)
}

function init() {
    randomQuestList(); 
}

init();
