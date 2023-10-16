"use strict";


const getComputerChoice = function() {
   const computerChoices = ["rock", "paper", "scissors"];
    return Math.floor(Math.random() * computerChoices.length);
}

const getPlayerChoice = function() {
    const player = prompt("Choose between 'rock', 'paper' and 'scissors' and write it below.").toLowerCase();
    return player;
}

const playRound = function(player, computer) {
    if (player === computer) {
        alert("It's a draw! 😐")
    
        // r > s, s > p , p > r
    } else if((player == "rock" && computer == "scissors") || (player == "scissors" && computer == "paper") || (player == "pSaper" && computer == "rock")) {
        alert("You Win! 🥳");
    } else {
        alert("You lose! 😭");
    }
}

playRound(getPlayerChoice, getComputerChoice);

