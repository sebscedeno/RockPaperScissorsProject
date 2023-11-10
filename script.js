
function getComputerChoice() {
    let personChoice = ['Rock', 'Paper', 'Scissorss'];
    let computerChoice = personChoice[Math.floor(Math.random() * 3)]
    return computerChoice
}
console.log(getComputerChoice())

function getResult(playerChoice, computerChoice) {

    let score;


    if (playerChoice === computerChoice) {
        score = 0
    }
    else if (playerChoice === 'Rock' && computerChoice === 'Scissorss') {
        score = 1
    }
    else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        score = 1
    }
    else if (playerChoice === 'Scissorss' && computerChoice === 'Paper') {
        score = 1
    }
    else {
        score = -1
    }


    return score
}
console.log(getResult())

function showResult(score, playerChoice, computerChoice) {

    let result = document.getElementById('result')

    switch (score) {
        case -1:
            result.innerText = `You Lose!`
            break;
        case 0:
            result.innerText = `It's a Draw!`
            break;
        case 1:
            result.innerText = `You Win!`
            break;


    }

    let hands = document.getElementById('hands')

    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`

}

function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
}

function playGame() {

    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(function (rpsButton) {
        rpsButton.onclick = () => onClickRPS(rpsButton)
    })
    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}

function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}


playGame()