let userChosen
let computerChosen
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.choices')

main()

//get a random computer choice 
function generatedComputerChoice(randomNumber) {
    if (randomNumber === 2) {
        return computerChosen = 'ROCK'
    } else if (randomNumber === 1) {
        return computerChosen = 'PAPER'
    } else if (randomNumber === 0) {
        return computerChosen = 'SCISSORS'
    }
}

//get results
function results() {
    if (computerChosen === userChosen) {
        return 'Lucky you, it is a Tie!'
    } else if (computerChosen === 'ROCK' && userChosen === 'PAPER') {
        return 'Yey, you WIN!'
    } else if (computerChosen === 'ROCK' && userChosen === 'SCISSORS') {
        return 'Buh, you LOST!'
    } else if (computerChosen === 'PAPER' && userChosen === 'ROCK') {
        return 'Buh, you LOST!'
    } else if (computerChosen === 'PAPER' && userChosen === 'SCISSORS') {
        return 'Yey, you WIN!'
    } else if (computerChosen === 'SCISSORS' && userChosen === 'PAPER') {
        return 'Buh, you LOST!'
    } else if (computerChosen === 'SCISSORS' && userChosen === 'ROCK') {
        return 'Yey, you WIN!'
    }
}

function main() {
    //get userChosen
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChosen = e.target.id
        let randomNumber = Math.trunc(Math.random() * (3))
        generatedComputerChoice(randomNumber)
        let myResults;
        myResults = results()
        userChoice.innerHTML = userChosen
        computerChoice.innerHTML = computerChosen
        displayResult.innerHTML = myResults
    }))
}