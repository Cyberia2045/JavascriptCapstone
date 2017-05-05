// Initializes the Game

	window.onload = function() {
		setTimeout(wordGuessInit, 0);
	}

// Game Variables

var wordBank = [ "quasar", "pulsar", "qbit", "singularity", "cosmos", "cassini", "oort"];
var lives = 5;
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var splitWord = currentWord.split("");

// DOM Variables

var container = document.getElementById("main-container");
var livesText = document.getElementById("lives-text");
var letterPrinter = document.getElementById("letter-printer");
var repeatMessage = document.getElementById("repeat-message");
var lettersGuessed = [];

function wordGuessInit() {

	for(var i=0; i < splitWord.length; i++) {
		var wordGuessDiv = document.createElement("div");
		wordGuessDiv.innerHTML = "_ "
		wordGuessDiv.classList.add("main-container__space");
		container.appendChild(wordGuessDiv);
	}
}

document.addEventListener("keypress", wordGuess);

function wordGuess() {
		
	if (lettersGuessed.indexOf(event.key) > -1) {
		console.log("You have already guessed this letter!")
		return
	}

	var correct = false;
	lettersGuessed.push(event.key);
	var lastLetter = lettersGuessed.slice(-1)[0];
	
	for (var i=0; i < currentWord.length; i++) {
		if (currentWord[i] === lastLetter) {
			correct = true;
			splitWord[i] = lastLetter;
			document.getElementsByClassName("main-container__space")[i].innerHTML = lastLetter;
		}
	}
		if (correct === false) {
			lives -= 1;
			livesText.innerHTML = "You have " + lives + " lives remaining.";
			var letterPrinterText = document.createTextNode(event.key);
			letterPrinter.appendChild(letterPrinterText);
		}

		if (lives <= 0) {
			livesText.innerHTML = "Game Over!";
			location.reload()
		}
}



