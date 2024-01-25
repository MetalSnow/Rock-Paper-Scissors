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

  return result;
}

function game() {
  const totalRounds = 5;
  let playerScore = 0;
  let computerScore = 0;

  // Loop through rounds
  for (let i = 1; i <= totalRounds; i++) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors");
    const computerSelection = getComputerChoice();
    let roundResult = playRound(
      playerSelection.toLowerCase(),
      computerSelection
    );
    console.log("Round: ", i);
    console.log(roundResult);

    // Update scores based on the result of the round
    if (roundResult.charAt(4) === "w") {
      console.log(
        `Score: player ${++playerScore} -- computer ${computerScore}`
      );
    } else if (roundResult.charAt(4) === "l") {
      console.log(
        `Score: player ${playerScore} -- computer ${++computerScore}`
      );
    } else {
      console.log(`Score: player ${playerScore} -- computer ${computerScore}`);
    }

    // Determine the winner based on the final scores
    if (playerScore === 3 || (i === 5 && playerScore > computerScore)) {
      console.log("Victory: You Won!!");
      break;
    } else if (
      computerScore === 3 ||
      (i === 5 && playerScore < computerScore)
    ) {
      console.log("Defeat: You Lost!!");
      break;
    } else if (i === 5 && playerScore === computerScore) {
      console.log("There's No Winner.");
    }
  }
}
game();
