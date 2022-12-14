// make a list of all possible choices
const choices = ["rock", "paper", "scissors"];

// get computer choices
function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// get playerChoice
function getPlayerChoice() {
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
    if (roundResults == "Tie") {
        return "This is a Tie!";
    } else if (roundResults == "Player") {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`;
    } else if (roundResults == "Computer") {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`;
    }
}

// make a function to play the game five rounds
function game() {
    console.log("|\t--------------------\t|");
    console.log("|\tWelcome to the game!\t|");
    console.log("|\t--------------------\t|");
    console.log("\n");

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round: ${i + 1}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log("\n");
        if (findWinner(playerSelection, computerSelection) == "Player") {
            playerScore++;
        } else if (findWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }

    console.log(`\nYour Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}\n`);

    if (playerScore > computerScore) {
        console.log("You Won the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer Won the game!");
    }
}

game();
