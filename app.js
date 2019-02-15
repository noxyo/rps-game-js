const game = () => {
	let pScore = 0;
	let cScore = 0;

	//start the Game
	const startGame = () => {
		const playBtn =  document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
		});
	};

	//Play Match
	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
		//Computer Options
		const computerOptions = ['rock', 'paper', 'scissors'];

		options.forEach(option => {
			option.addEventListener('click', function(){
				
				//Computer Choice:
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];
				//console.log(computerChoice);

				// Here is where we call compare hands

			});
		});
	};

	//Compare Match
	const compareHands = (playerChoice, computerChoice) => {
		//Update Text
		const winner == document.querySelector('winner');
		
		// Checking for a tie
		if(playerChoice === computerChoice){
			winner.textContent = 'It is a tie';
			return;
		}

		//Check for Rock
	};

	// call all functions
	startGame();
	playMatch();

};

//start the game Function
game();