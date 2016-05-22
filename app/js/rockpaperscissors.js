////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if(move!=='undefined' || move!=='null') {
    return (move);
}
else {
	getInput();
	}
}

function getComputerMove(move) {
    if(move=='undefined'|| move==='null') {
    randomPlay();
}
else {
	return(move);
	}
}
getComputerMove();

function getWinner(playerMove,computerMove) {
    var winner;
    var player, computer;
	if (playerMove === 'rock' && computerMove === 'scissors' ||
	playerMove === 'scissors' && computerMove === 'paper' ||
	playerMove === 'paper' && computerMove === 'rock') {
		winner = 'player';
	}
	else if (playerMove === computerMove) {
		winner = 'tie'
	}
	else {
		winner = 'computer'
	}
	return winner;
	
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
       getWinner();
       console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
       if (getWinner()==='player') {
       	playerWins++;
       }
       else if (getWinner()==='computer') {
       	computerWins++;
       		}
       
       }
       return [playerWins, computerWins];
   }

