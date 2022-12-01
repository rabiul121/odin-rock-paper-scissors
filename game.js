// make a list of all possible choices
const choices = ["rock", "paper", "scissors"];

// get computer choices
function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// get playerChoice
function playerChoice() {
    let isValidInput = false;
    while (isValidInput == false) {
        const choice = prompt("Enter Rock Paper or Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLowerCase = choice.toLowerCase();
        if (choices.includes(choiceInLowerCase)) {
            isValidInput = true;
            return choiceInLowerCase;
        }
    }


}

// find the winner for a single round
function findWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "Player";
    } else {
        return "Computer";
    }
}

// write a function that plays a single round of game
function playRound(playerSelection, computerSelection) {
    const roundResults = findWinner(playerSelection, computerSelection);
    // console.log(roundResults);
    if (roundResults == "Tie") {
        return "This is a tie!";
    } else if (roundResults == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}
// make a function to play the game five rounds
function game() {
    console.log("Welcome to the game!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
