

function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    return options = [Math.floor(Math.random()* options.length)];
} if (getComputerChoice() == 0) {
    // return "rock";
    console.log("rock");
} else if (getComputerChoice() == 1) {
    // return "paper";
    console.log("paper");
} else if (getComputerChoice() == 2) {
    // return "scissors";
    console.log("scissors");
} else {
    console.log("din mamma");
}


// console.log(getComputerChoice());

