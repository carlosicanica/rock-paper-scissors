let compScore = 0;
let playerScore = 0;

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
        compScore++;
        return "You lost! Computer chose paper.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You won! Computer chose scissors.";
    }  else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie! You both chose paper.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        return "You lost! Computer chose scissors.";
    }  else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You won! Computer chose rock.";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie! You both chose scissors.";
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++;
        return "You lost! Computer chose rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You won! Computer chose paper.";
    }
}



function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose between rock, paper or scissors!", "Rock, Paper, Scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));

    }


        if (playerScore < compScore) {
            return "You lost the game! Better luck next time!"
        
        } else if (playerScore > compScore) {
            return "Congratulations! You won the game!";
        } else {
            return "The game is a tie!"
        }
}

console.log(game())

