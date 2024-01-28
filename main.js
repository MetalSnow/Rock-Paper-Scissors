function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let randomEl = array[Math.floor(Math.random() * array.length)];
  return randomEl;
}

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
  console.log(`Player selected: ${playerSelection}`);
  console.log(result);
  // let divResults = document.createElement("div");
  // divResults.textContent = result;
  // document.body.appendChild(divResults);
}

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
