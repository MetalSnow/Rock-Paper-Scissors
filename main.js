// Create a function to generate the computer's choice
// The function randomly selects rock, paper, or scissors and returns the chosen value
function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let randomEl = array[Math.floor(Math.random() * array.length)];
  return randomEl;
}
