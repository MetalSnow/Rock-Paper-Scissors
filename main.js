function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let randomEl = array[Math.floor(Math.random() * array.length)];
  return randomEl;
}

let resultsContainer = document.querySelector(".results");

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
  resultsContainer.innerHTML = "";

  let playerSlected = document.createElement("div");
  let computerSlected = document.createElement("div");
  let roundResults = document.createElement("div");

  playerSlected.textContent = `Player selected: ${playerSelection}`;
  computerSlected.textContent = `Computer selected: ${computerSelection}`;
  roundResults.textContent = result;

  resultsContainer.appendChild(playerSlected);
  resultsContainer.appendChild(computerSlected);
  resultsContainer.appendChild(roundResults);

  return result;
}

//Get Buttons
let rock = document.querySelector("#rockBtn");
let paper = document.querySelector("#paperBtn");
let scissors = document.querySelector("#scissorsBtn");

//Add Event Listeners
let playerSelection;
rock.addEventListener("click", () => {
  playerSelection = "rock";
  playRound(playerSelection, getComputerChoice());
  game();
});

paper.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection, getComputerChoice());
  game();
});

scissors.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound(playerSelection, getComputerChoice());
  game();
});

// Get game section
let gameSection = document.querySelector(".game");

// game() variables
let totalRounds = 0;
let playerScore = 0;
let computerScore = 0;

function game() {
  totalRounds += 1;

  // Clear gameSection's HTML if there is
  gameSection.innerHTML = "";

  let roundResult = playRound(playerSelection, getComputerChoice());

  let roundNumber = document.createElement("span");
  roundNumber.textContent = `Total Rounds : ${totalRounds}`;
  gameSection.appendChild(roundNumber);

  // Update scores based on the result of the round
  let score = document.createElement("h3");

  if (roundResult.charAt(4) === "w") {
    score.textContent = `Score: player ${++playerScore} -- computer ${computerScore}`;
  } else if (roundResult.charAt(4) === "l") {
    score.textContent = `Score: player ${playerScore} -- computer ${++computerScore}`;
  } else {
    score.textContent = `Score: player ${playerScore} -- computer ${computerScore}`;
  }

  gameSection.appendChild(score);

  // Determine the winner based on the final scores
  let finalScore = document.createElement("h2");

  if (playerScore === 3 || (totalRounds === 5 && playerScore > computerScore)) {
    finalScore.textContent = "Victory: You Won!!";
    totalRounds = 0;
    playerScore = 0;
    computerScore = 0;
  } else if (
    computerScore === 3 ||
    (totalRounds === 5 && playerScore < computerScore)
  ) {
    finalScore.textContent = "Defeat: You Lost!!";
    totalRounds = 0;
    playerScore = 0;
    computerScore = 0;
  } else if (totalRounds === 5 && playerScore === computerScore) {
    finalScore.textContent = "There's No Winner.";
    totalRounds = 0;
    playerScore = 0;
    computerScore = 0;
  }
  gameSection.appendChild(finalScore);
}
