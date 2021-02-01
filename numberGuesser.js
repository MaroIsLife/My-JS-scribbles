let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const updateScore = (string) => {
  if (string === 'human')
    humanScore++;
  else
    computerScore++;
}
const advanceRound = () => currentRoundNumber++;

const compareGuesses = (humanGuess,computerGuess,toBeGuessed) => {
    let computerGuess2 = Math.abs(toBeGuessed - computerGuess);
    let humanGuess2 = Math.abs(toBeGuessed - humanGuess);

    console.log(`Target Number ${toBeGuessed}`);
    console.log(`Player's Number: ${humanGuess}`);
    console.log(`Computer's Number: ${computerGuess}\n`);

    if (humanGuess2 < computerGuess2)
    {
      console.log('Player won!');
    }
    else if (humanGuess2 === computerGuess2)
      console.log('It\'s a tie!');
    else
      console.log('Computer won!');
  }


  const play = (yourNumber) => {
    let computerGuess1 = generateTarget();
    let toBeGuessed1 = generateTarget();
    
   compareGuesses(yourNumber,computerGuess1,toBeGuessed1);
 
  }

  play(8);
