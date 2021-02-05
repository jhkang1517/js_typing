// const aswr = document.querySelector(".answer");
let progressTime = 0; // 경과시간(초)
const grsWpm = document.querySelector(".grossWpm");


function grossWpmChecker() {
    const allTypedEntries = aswr.value.length;
    const divStandard = 5;
    const minuteStandard = 60;

    return Math.floor(((allTypedEntries/divStandard)/(progressTime/minuteStandard)))
}

function getTime() {
    // const date = new Date();
    // const second = date.getSeconds();
    let resultWPM = 0 // 최종 WPM

    if (aswr.value === "") {
        progressTime = 0;
        grsWpm.innerText = 0;
    } else {
        progressTime = progressTime + 1;
        resultWPM = grossWpmChecker();
        grsWpm.innerText = resultWPM;
    }

    // console.log(resultWPM);
}

function init() {
    setInterval(getTime, 1000);
}

init();