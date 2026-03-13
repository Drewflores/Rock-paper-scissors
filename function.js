let humanScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const output1 = document.getElementById("outputOne");
const output2 = document.getElementById("outputTwo");

rock.addEventListener("click", () => {
    playRound("ROCK");

    while (humanScore < 3 && computerScore < 3){
        output2.textContent = "Next Round!";
    }
    if (humanScore == 3){
        output2.textContent = "You win!";
    } else {
        output2.textContent = "You Lose!";
    }
});

paper.addEventListener("click", () => {
    playRound("PAPER");

    while (humanScore < 3 && computerScore < 3){
        output2.textContent = "Next Round!";
    }
    if (humanScore == 3){
        output2.textContent = "You win!";
    } else {
        output2.textContent = "You Lose!";
    }
});

scissors.addEventListener("click", () => {
    playRound("SCISSORS");

    while (humanScore < 3 && computerScore < 3){
        output2.textContent = "Next Round!";
    }
    if (humanScore == 3){
        output2.textContent = "You win!";
    } else {
        output2.textContent = "You Lose!";
    }
});

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

const playRound = (move) => {
    const humChoice = move;
    const comChoice = getComputerChoice();

    if (humChoice === comChoice){
        output1.textContent += `No Winner: ${humChoice} is equal to ${comChoice}`;
    } else if (humChoice === "ROCK" && comChoice === "SCISSORS"){
        humanScore += 1;
        output1.textContent += "You Win! Rock beats Scissors";
    } else if (humChoice === "PAPER" && comChoice === "ROCK"){
        humanScore += 1;
        output1.textContent += "You Win! Paper beats Rock";
    } else if (humChoice === "SCISSORS" && comChoice === "PAPER"){
        humanScore += 1;
        output1.textContent += "You Win! Scissors beats Paper";
    } else if (comChoice === "ROCK" && humChoice === "SCISSORS"){
        computerScore += 1;
        output1.textContent += "You Lose! Rock beats Scissors";
    } else if (comChoice === "PAPER" && humChoice === "ROCK"){
        computerScore += 1;
        output1.textContent += "You Lose! Paper beats Rock";
    } else if (comChoice === "SCISSORS" && humChoice === "PAPER"){
        computerScore += 1;
        output1.textContent += "You Lose! Scissors beats Paper";
    } else {
        computerScore += 1;
        output1.textContent += `You Lose! ${humChoice} is invalid`;
    }
};

