// Generate a random choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissor'];
  const random = Math.floor(Math.random() * choices.length);
  return choices.at(random).toLowerCase();
}

const computerSelection = getComputerChoice();
console.log(computerSelection);

// Get the user input value of the Prompt Windows
function promptValue() {
  let promptValue = '';
  while (promptValue === null || promptValue === '') {
    promptValue = window.prompt(
      'Pick a Choice to play:  Rock, Paper or Scissors',
      ''
    );
  }
  return promptValue.toLowerCase();
}

const playerSelection = promptValue();
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
  let PlayerWinner = 'Player Wins, Paper beats Rock';
  let tie = 'There is a Draw';
  let computerWinner = 'Computer Wins, Rock beats Scissor';

  return playerSelection === computerSelection
    ? tie
    : playerSelection === 'rock' && computerSelection === 'scissor'
    ? PlayerWinner
    : playerSelection === 'paper' && computerSelection === 'rock'
    ? PlayerWinner
    : playerSelection === 'scissor' && computerSelection === 'paper'
    ? PlayerWinner
    : computerWinner;
}

console.log(playRound(playerSelection, computerSelection));
