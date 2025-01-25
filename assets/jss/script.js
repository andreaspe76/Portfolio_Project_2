/**
 * Wait for the DOM to load before running the game
 * Get the button elements and add event listeners to them
 */

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            let playerChoice = this.getAttribute('data-choice');
            alert(`You chose ${playerChoice}`);
        });

    };

});

function runGame() {

}

function getPlayerChoice() {

}

function getComputerChoice() {

}

function determineWinner() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}