let correctNum = getRandomNumber();

let GuessesList = [];

window.onload = function () {
    document.getElementById("check").addEventListener("click", playgame);
    document.getElementById("restart").addEventListener("click", initgame);
}

function playgame() {
    let GuessedNumber = document.getElementById('guess').value;
    console.log(GuessedNumber);
    displayResult(GuessedNumber);
    saveGuessHistory(GuessedNumber);
    displayHistory();
}

function getRandomNumber() {
    let RandomNumber = (Math.floor(Math.random() * 100)) + 1;
    return RandomNumber;
}

function displayResult(numberGuess) {
    if (numberGuess > correctNum) {
        showAbove()
    } else if (numberGuess < correctNum) {
        showBelow()
    } else {
        showWin()
    }
}

function getDialog(dialogType, text) {
    let dia
    switch (dialogType) {
        case "warning":
            dia = '<div class="alert warning mt-3" role="alert">' + text + "</div>";
            break;
        case "won":
            dia = '<div class="alert won mt-3" role="alert">' + text + "</div>";
            break;

        default:
            break;
    }
   
    return dia;
}

function showAbove() {
    const text = "Your Guess Is Too High !!";
    insruction = getDialog("warning", text);
    document.getElementById("result").innerHTML = insruction;
}

function showBelow() {
    const text = "Your Guess Is Too Low !!";
    insruction = getDialog("warning", text);
    document.getElementById("result").innerHTML = insruction;
}

function showWin() {
    const text = "Awesome job,You Got It!!";
    insruction = getDialog("won", text);
    document.getElementById("result").innerHTML = insruction;
}

function saveGuessHistory(numberGuess){
    GuessesList.unshift(numberGuess);
}

function displayHistory(){
    let historyText = '<ul class="list-group">';
    for (let i = 0; i < GuessesList.length; i++) {
        historyText += '<li class="list-group-item list mt-1"> You Guessed ' + GuessesList[i] + '</li>';
    }
    historyText += '</ul>';
    document.getElementById("history").innerHTML = historyText;
}

function initgame(){
    correctNum = getRandomNumber();
    document.getElementById("history").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    GuessesList = [];
}