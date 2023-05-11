function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissor'];
  const random = Math.floor(Math.random() * choices.length);
  return choices.at(random).toLowerCase();
}

const computerSelection = getComputerChoice();

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
