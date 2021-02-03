const quest = document.querySelector(".question"); // 영향을 미칠 html 코드를 가져오고
const questList = ["test1", "test2", "test3"] // 넣을 값들


function genRandom() {
    const lenQuestList = questList.length; // index 접근을 위한 length check
    const number = Math.floor(Math.random() * lenQuestList);
    return number;
}

function randomQuestList() {
    const charSpan = document.createElement('span'); // 값을 담을 태그 생성
    const randomNumber = genRandom();
    charSpan.innerText = questList[randomNumber] // 준비된 태그에 값 삽입 
    quest.appendChild(charSpan) // 태그안에 태그 삽입 (화면출력)
}

function init() {
    randomQuestList();
}

init();
