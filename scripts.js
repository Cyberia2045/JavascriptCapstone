// Initializes the Game

	window.onload = function() {
		setTimeout(wordGuessInit, 0);
	}

// Game Variables

var wordBank = [ "quasar", "pulsar", "qbit", "singularity", "cosmos", "cassini", "oort"];
var lives = 5;
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var splitWord = currentWord.split("");
var blankSpaceArray = Array(currentWord.length +1).join("_ ");
var guessedWord = blankSpaceArray.split(" ")

// DOM Variables

var container = document.getElementById("main-container");
var mainHeading = document.getElementById("main-heading");
var subHeading = document.getElementById("sub-heading");
var livesText = document.getElementById("lives-text");
var letterPrinter = document.getElementById("letter-printer");
var gameImage = document.getElementById("game-image");
var lettersGuessed = [];

function wordGuessInit() {

	for(var i=0; i < splitWord.length; i++) {
		wordGuessDiv = document.createElement("div");
		wordGuessDiv.innerHTML = "_ "
		wordGuessDiv.classList.add("main-container__space");
		container.appendChild(wordGuessDiv);
	}
}

document.addEventListener("keypress", wordGuess);

function wordGuess() {
		
	if (lettersGuessed.indexOf(event.key) > -1) {
		alert("You have already guessed this letter!")
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
			guessedWord[i] = lastLetter;
		}
	}

		if (correct === false) {
			lives -= 1;
			livesText.innerHTML = "You have " + lives + " lives remaining.";
			var letterPrinterText = document.createTextNode(event.key);
			letterPrinter.appendChild(letterPrinterText);
		}

		if (lives <= 0) {
			document.body.style.backgroundColor = "red";
			mainHeading.style.display = "none";
			subHeading.style.display = "none";
			container.style.display = "none";
			letterPrinter.style.display = "none";
			livesText.style.fontSize = "5em";
			livesText.innerHTML = "Game Over!";
			setTimeout (function() { location.reload(); }, 7000);
		}

		if (guessedWord.indexOf("_") <= -1) {
			document.body.style.backgroundColor = "blue";
			mainHeading.style.display = "none";
			subHeading.style.display = "none";
			container.style.display = "none";
			letterPrinter.style.display = "none";
			livesText.style.fontSize = "5em";
			livesText.innerHTML = "You Win!";
			var flasher1 = setInterval (function() { 
				livesText.style.display = "none";
			}, 200);
			var flasher2 = setInterval (function() { 
				livesText.style.display = "block";
			}, 400);
			setTimeout (function() { clearInterval(flasher1, flasher2); }, 3000);
			setTimeout (function() { 
				gameImage.style.backgroundImage = "url('assets/images/chuck_norris.jpg')";
				gameImage.style.backgroundSize = "cover";
				gameImage.style.backgroundRepeat = "no-repeat";
		  }, 3000);
			setTimeout (function() { location.reload(); }, 7000);

	} // ends the if statement
}; // ends wordGuess Function



