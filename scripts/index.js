//////////////// DOM Variables
const body = document.querySelector('body');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const messageWinner = document.querySelector('#message-winner');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const roundWinner = document.querySelector('.round-winner');
const btnReset = document.querySelector('#reset');
const rockId = document.getElementById('rock');
const paperId = document.getElementById('paper');
const scissorId = document.getElementById('scissor');

////////////// Global Score Variables
let playerCount = 0;
let computerCount = 0;
const choices = ['Rock', 'Paper', 'Scissor'];
const WINNER_SCORE = 5

//////////////////////////////// Generate a random choice///////////////////////////////////////
function getComputerChoice() { 
  const random = Math.floor(Math.random() * choices.length);
  return choices.at(random).toLowerCase();
}

/////////////////////////////// Event Handler
function eventHandler(e) {
  let val = e.target.classList.value;
  if (choices.includes(val)) {
    playRound(val, getComputerChoice());
    playerScore.textContent = playerCount.toString();
    computerScore.textContent = computerCount.toString();
  }

  finalWinner(playerCount, computerCount);
}

///////////////////////////// Final WInner Handler
function finalWinner(player, computer) {
  if (player === WINNER_SCORE || computer === WINNER_SCORE) {
    messageWinner.textContent = `${
      player === WINNER_SCORE ? 'Player' : 'Computer'
    } is the winner`;
    roundWinner.textContent = 'Click Down To Play Again';
    stopPoints();
  }
}

//////////////////////////// Stop to Add points
function stopPoints() {
  playerCount = 0;
  computerCount = 0;
  rockId.classList.add('disabled');
  paperId.classList.add('disabled');
  scissorId.classList.add('disabled');
}

///////////////////////////// Button Reset

function reset() {
  playerCount = 0;
  computerCount = 0;
  playerScore.textContent = '0';
  computerScore.textContent = '0';
  roundWinner.textContent = 'Pick a Choice';
  messageWinner.innerHTML = 'LETS PLAY!!';
  rockId.classList.remove('disabled');
  paperId.classList.remove('disabled');
  scissorId.classList.remove('disabled');
  body.style.backgroundColor = 'aqua';
}

// Generate a winner Player vs Computer

// Generate a winner Player vs Computer

function playRound(playerSelection, computerSelection) {
  const PlayerWinner = `Player Wins, ${playerSelection} beats ${computerSelection}`;
  const tie = 'There is a Draw';
  const computerWinner = `Computer Wins, ${computerSelection} beats ${playerSelection}`;
  let result = '';

  playerSelection === computerSelection
    ? ((result = roundWinner.textContent = tie),
      (body.style.backgroundColor = 'white'))
    : playerSelection === 'rock' && computerSelection === 'scissor'
    ? (playerCount++,
      (result = roundWinner.textContent = PlayerWinner),
      (body.style.backgroundColor = 'green'))
    : playerSelection === 'paper' && computerSelection === 'rock'
    ? (playerCount++,
      (result = roundWinner.textContent = PlayerWinner),
      (body.style.backgroundColor = 'green'))
    : playerSelection === 'scissor' && computerSelection === 'paper'
    ? (playerCount++,
      (result = roundWinner.textContent = PlayerWinner),
      (body.style.backgroundColor = 'green'))
    : (computerCount++,
      (result = roundWinner.textContent = computerWinner),
      (body.style.backgroundColor = 'red'));
  return result;
}

document.addEventListener('click', eventHandler);
btnReset.addEventListener('click', reset);
