/**
 * Declare constants and variables for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName('btn-control');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const result = document.getElementById('result');
const gameOver = document.getElementById('game_over');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const outcomes = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
};
let playerScore = parseInt(document.getElementById('player-score').innerText);
let computerScore = parseInt(document.getElementById('computer-score').innerText);

/**
 * Wait for the DOM to load before running the game
 * Get the button elements and add event listeners to them
 */
document.addEventListener('DOMContentLoaded', function () {

    for (let button of buttons) {
        button.addEventListener('click', function () {
            let playerChoice = this.getAttribute('data-choice');
            runGame(playerChoice);
        });

    }

});


/**
 * Main game logic
 */
function runGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.webp`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * choices.length);

    computerImage.src = `assets/images/${choices[computerChoice]}.webp`;
    computerImage.alt = choices[computerChoice];

    determineWinner(choices[playerChoice], choices[computerChoice]);

}


/** 
 * Gets the player and computer choices, determines the winner
 * and displays the result
 */
function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        result.innerText = 'Its a tie!';
        document.getElementById('body').style.backgroundColor = "rgb(177, 177, 177)";
        decrementTurns();
    } else if (outcomes[playerChoice].includes(computerChoice)) {
        result.innerText = 'Player wins!';
        document.getElementById('body').style.backgroundColor = "rgb(125, 212, 125)";
        incrementPlayerScore();
    } else {
        result.innerText = 'Computer wins!';
        document.getElementById('body').style.backgroundColor = "rgb(238, 104, 115)";
        incrementComputerScore();
    }

}


/**
 * Gets the current tally of the user's score from DOM and increments it by 1
 */
function incrementPlayerScore() {

    document.getElementById('player-score').innerText = ++playerScore;
    decrementTurns();

}


/**
 * Gets the current tally of the computer's score from DOM and increments it by 1
 */
function incrementComputerScore() {

    document.getElementById('computer-score').innerText = ++computerScore;
    decrementTurns();

}


/**
 * Gets the current tally of the turns remaining from DOM and decrements it by 1
 */
function decrementTurns() {

    let oldTurns = parseInt(document.getElementById('turns-left').innerText);
    document.getElementById('turns-left').innerText = --oldTurns;

    if (oldTurns === 0) {
        document.getElementById('turns-left').innerText = "There are no more turns left!";

        if (playerScore > computerScore) {
            gameOver.innerText = 'You won this round! 🎉';
            gameOver.classList.add('highlight');
        } else if (playerScore < computerScore) {
            gameOver.innerText = 'Awww!! The computer won this round! 😒';
            gameOver.classList.add('highlight');
        } else {
            gameOver.innerText = 'Balance has been restored. This round is a tie! ☯️';
            gameOver.classList.add('highlight');
        }

        showResetButton();

    }

}


/**
 * Shows hidden reset button
 * and resets the game when clicked
 */
function showResetButton() {

    let resetButton = document.getElementById('btn_reset');
    resetButton.style.display = 'block';
    resetButton.addEventListener('click', function () {
        window.location.reload();
    });

    disableButtons();

}


/**
 * Disables the choice buttons
 * when there are no more turns left
 */
function disableButtons() {

    for (let button of buttons) {
        button.disabled = true;
    }

}