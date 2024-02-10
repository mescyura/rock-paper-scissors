const score = JSON.parse(localStorage.getItem('score')) || {
	wins: 0,
	losses: 0,
	ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
	const computerMove = pickComputerMove();
	let result;

	if (playerMove === 'rock') {
		if (computerMove === 'rock') {
			result = 'Tie';
		} else if (computerMove === 'paper') {
			result = 'You lose';
		} else if (computerMove === 'scissors') {
			result = 'You won';
		}
	} else if (playerMove === 'paper') {
		if (computerMove === 'paper') {
			result = 'Tie';
		} else if (computerMove === 'scissors') {
			result = 'You lose';
		} else if (computerMove === 'rock') {
			result = 'You won';
		}
	} else if (playerMove === 'scissors') {
		if (computerMove === 'scissors') {
			result = 'Tie';
		} else if (computerMove === 'rock') {
			result = 'You lose';
		} else if (computerMove === 'paper') {
			result = 'You won';
		}
	}

	if (result === 'Tie') {
		score.ties += 1;
	} else if (result === 'You lose') {
		score.losses += 1;
	} else if (result === 'You won') {
		score.wins += 1;
	}

	localStorage.setItem('score', JSON.stringify(score));

	document.querySelector('.result').innerHTML = result;

	document.querySelector('.moves').innerHTML = `You
			<img class="move-icon" src="./images/${playerMove}-emoji.png" alt="${playerMove}-emoji" />
			<img class="move-icon" src="./images/${computerMove}-emoji.png" alt="${computerMove}-emoji" />
			Computer`;

	updateScoreElement();
}

function updateScoreElement() {
	document.querySelector(
		'.score'
	).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function reset() {
	score.wins = 0;
	score.losses = 0;
	score.ties = 0;
	localStorage.removeItem('score');
	updateScoreElement();
	document.querySelector('.result').innerHTML = '';
	document.querySelector('.moves').innerHTML = '';
}

function pickComputerMove() {
	let computerMove;
	let randomNumber = Math.random();

	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		computerMove = 'rock';
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'paper';
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = 'scissors';
	}
	return computerMove;
}
