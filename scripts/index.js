const gameWinner = 'is the Game Winner';
const noWinner = 'None of the participants win, They got same points.';
let playerCount = 0;
let computerCount = 0;

// Generate a random choice///////////////////////////////////////
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissor'];
  const random = Math.floor(Math.random() * choices.length);
  return choices.at(random).toLowerCase();
}

// Get the user input value of the Prompt Windows/////////////////////
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

function playRound(playerSelection, computerSelection) {
  const PlayerWinner = `Player Wins, ${playerSelection} beats ${computerSelection}`;
  const tie = 'There is a Draw';
  const computerWinner = `Computer Wins, ${computerSelection} beats ${playerSelection}`;
  let result = '';

  playerSelection === computerSelection
    ? (result = tie)
    : playerSelection === 'rock' && computerSelection === 'scissor'
    ? (playerCount++, (result = PlayerWinner))
    : playerSelection === 'paper' && computerSelection === 'rock'
    ? (playerCount++, (result = PlayerWinner))
    : playerSelection === 'scissor' && computerSelection === 'paper'
    ? (playerCount++, (result = PlayerWinner))
    : (computerCount++, (result = computerWinner));
  return result;
}

function winnerResult() {
  return (finalResult =
    playerCount > computerCount
      ? `The Player ${gameWinner}`
      : playerCount < computerCount
      ? `The Computer ${gameWinner}`
      : noWinner);
}

function game() {
  for (let i = 1; i < 6; i++) {
    console.log(playRound(promptValue(), getComputerChoice()));
  }
  return winnerResult();
}

console.log(game());
