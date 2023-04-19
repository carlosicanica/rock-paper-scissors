

function getComputerChoice () {
    const compOptions = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = compOptions[randomNumber];
    return choice;
}

// console.log(getComputerChoice());

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie! You both chose rock.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost! Computer chose paper.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won! Computer chose scissors.";
    }  else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie! You both chose paper.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost! Computer chose scissors.";
    }  else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won! Computer chose rock.";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie! You both chose scissors.";
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost! Computer chose rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won! Computer chose paper.";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// playRound();