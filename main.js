function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let randomEl = array[Math.floor(Math.random() * array.length)];
  return randomEl;
}

let playerDiv = document.querySelector(".player");
let computerDiv = document.querySelector(".computer");

function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You won! ${playerSelection} beats ${computerSelection}.`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  DeleteContent();

  let divResults = document.createElement("div");
  let playerSlected = document.createElement("h3");
  let computerSlected = document.createElement("h3");

  playerSlected.textContent = `Player selected: ${playerSelection}`;
  computerSlected.textContent = `Player selected: ${computerSelection}`;
  divResults.textContent = result;

  playerDiv.appendChild(playerSlected);
  computerDiv.appendChild(computerSlected);
  document.body.appendChild(divResults);
}

function DeleteContent() {}

//Get Buttons
let rock = document.querySelector("#rockBtn");
let paper = document.querySelector("#paperBtn");
let scissors = document.querySelector("#scissorsBtn");

//Add Event Listeners
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
