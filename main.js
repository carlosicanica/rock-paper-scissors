

function getComputerChoice () {
    const compOptions = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = compOptions[randomNumber];
    return choice;
}

console.log(getComputerChoice());

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won!";
    }  else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost!";
    }  else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie!";
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won!";
    }
}

// playRound();