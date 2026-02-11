let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const num = Math.floor(Math.random() * 10);
    if (num <= 3){
        return "ROCK";
    } else if (num > 3 && num <= 6){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
};

const getHumanChoice = () => {
    const choice = prompt("Select one from the 3 choices(rock, paper, scissors)");
    return choice;
};

const playRound = () => {
    const humChoice = getHumanChoice().toUpperCase();
    const comChoice = getComputerChoice();

    if (humChoice === comChoice){
        console.log(`No Winner: ${humChoice} is equal to ${comChoice}`);
    } else if (humChoice === "ROCK" && comChoice === "SCISSORS"){
        humanScore += 1;
        console.log("You Win! Rock beats Scissors");
    } else if (humChoice === "PAPER" && comChoice === "ROCK"){
        humanScore += 1;
        console.log("You Win! Paper beats Rock");
    } else if (humChoice === "SCISSORS" && comChoice === "PAPER"){
        humanScore += 1;
        console.log("You Win! Scissors beats Paper");
    } else if (comChoice === "ROCK" && humChoice === "SCISSORS"){
        computerScore += 1;
        console.log("You Lose! Rock beats Scissors");
    } else if (comChoice === "PAPER" && humChoice === "ROCK"){
        computerScore += 1;
        console.log("You Lose! Paper beats Rock");
    } else if (comChoice === "SCISSORS" && humChoice === "PAPER"){
        computerScore += 1;
        console.log("You Lose! Scissors beats Paper");
    } else {
        computerScore += 1;
        console.log(`You Lose! ${humChoice} is invalid`);
    }
};

const playGame = () => {
    
    do {
        playRound();
    } while (humanScore < 3 && computerScore < 3);

    if (humanScore == 3){
        return `You Win! ${humanScore} : ${computerScore}`;
    } else {
        return `You Lose! ${computerScore} : ${humanScore}`;
    }
};

console.log(playGame());
