/**
 * Declare constants for DOM elements
 * and possible choices
 */

const buttons = document.getElementsByClassName('btn-control');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const result = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const outcomes = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
};

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

function determineWinner() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}