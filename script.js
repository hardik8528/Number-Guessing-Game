let correctNum = getRandom()

let guesses = []

window.onload = function () {
    document.getElementById("check").addEventListener("click", playgame)
    document.getElementById("restart").addEventListener("click", initgame)
}

function playgame() {
    let numberGuess = document.getElementById('guess').value;
    console.log(numberGuess)
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

function getRandom() {
    let num = (Math.floor(Math.random() * 100)) + 1
    return num
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
            dia = '<div class="alert alert-warning mt-3" role="alert">' + text + "</div>"
            break
        case "won":
            dia = '<div class="alert alert-info mt-3" role="alert">' + text + "</div>"
            break

        default:
            break
    }
   
    return dia
}

function showAbove() {
    const text = "Your Guess Is Too High !!"
    insruction = getDialog("warning", text)
    document.getElementById("result").innerHTML = insruction
}

function showBelow() {
    const text = "Your Guess Is Too Low !!"
    insruction = getDialog("warning", text)
    document.getElementById("result").innerHTML = insruction
}

function showWin() {
    const text = "Awesome job,You Got It!!"
    insruction = getDialog("won", text)
    document.getElementById("result").innerHTML = insruction
}

function saveGuessHistory(numberGuess){
    guesses.unshift(numberGuess)
}

function displayHistory(){
    let historyText = '<ul class="list-group">'
    for (let i = 0; i < guesses.length; i++) {
        historyText += '<li class="list-group-item list-group-item-dark mt-1"> You Guessed ' + guesses[i] + '</li>'
    }
    historyText += '</ul>'
    document.getElementById("history").innerHTML = historyText
}

function initgame(){
    correctNum = getRandom();
    document.getElementById("history").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    guesses = []
}