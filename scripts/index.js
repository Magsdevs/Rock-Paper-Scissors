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
  let winner = '';

  if (playerSelection === computerSelection) {
    winner = `There is no winner`;
  }
  if (playerSelection === 'rock' && computerSelection === 'scissor') {
    winner = 'Player Wins, Rock beats Scissor';
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    winner = 'Player Wins, Paper beats Rock';
  }
  if (playerSelection === 'scissor' && computerSelection === 'paper') {
    winner = 'Player Wins, Scissor beats Paper';
  }

  if (computerSelection === 'rock' && playerSelection === 'scissor') {
    winner = 'Computer Wins, Rock beats Scissor';
  }
  if (computerSelection === 'paper' && playerSelection === 'rock') {
    winner = 'Computer Wins, Paper beats Rock';
  }
  if (computerSelection === 'scissor' && playerSelection === 'paper') {
    winner = 'Computer Wins, Scissor beats Paper';
  }
  return winner;
}

console.log(playRound(playerSelection, computerSelection));
