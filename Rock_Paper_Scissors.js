const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper')
	{
		return userInput;
	}
	else if (userInput === 'bomb')
	{
		console.log('Bomb Activated');
		return userInput;
	}
	else
		console.log('Error');
}

const getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3);

	if (randomNumber === 2)
		return 'rock';
	else if (randomNumber === 1)
		return 'paper';
	else
		return 'scissors'
}


const determineWinner = (userChoice,computerChoice) => {

	if (userChoice === 'bomb')
		return ('User won!');

	else if (userChoice === computerChoice)
		return ('It\'s a tie!');

	else if (userChoice === 'paper' && computerChoice === 'scissors')
		return ('CPU chose Scissors, Computer Won!');

	else if (userChoice === 'rock' && computerChoice === 'paper')
		return ('CPU chose Papers, Computer Won!');

	else if (userChoice === 'scissors' && computerChoice === 'rock')
		return ('CPU chose Rock, Computer Won!');

	else
		return ('User won!');
}

const playGame = (input) => {
	let computerChoice = getComputerChoice();
	let userChoice = getUserChoice(input);

	console.log(determineWinner(userChoice,computerChoice));
}

playGame('bomb');
