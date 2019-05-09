// Array of Words to Randomly pick.
var wordBank = ["khole", "kylie", "kimberly", "kim", "kourtney", "kendell", "kris"];
// Solution will be held here.
var pickedWord = "";
// This will break the solution into individual letters to be in  stored in array.
var numLettersInPickedWord = [];
// This will be the number of blanks we show based on the solution.
var numofblanks = 0;
// Holds a mix of blank and solved lettersall of blank (ex. a,_,_,l,e).
var blanksAndSuccesses =[];
// Holds all of the wrong guesses
var wrongGuess = []; 

// GAME COUNTERs
var winCounter = 0;  
var lossCounter = 0;         
var remainingGuesses = 10; 

// FUNCTIONS

// Select a random word 
function playGame() {
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log('random word = ' randomword);

for(var i = 0; i < randomWord.length; i++) {
blankLetterArr.push = ("_");

}
//Printing underscores to thescreen
document.getElementById("word-blanks").textContent = blankLetterArr.join(" ");

//Reset
wrongGuess = [];
guessesLeft = 10;

//HTML
document.getElementById("guesses-left").textContent = guessesLeft;

}
//Player Guess
document.onkeyup = function(event) {
    userGuesses = event.key;

    if(userGuesses.indexOf(userGuesses) > -1) {
        
    }

}


var remainingLetters = wordArray.length;

//  If the guess is not a single letter {
Tell the player to pick again
}

Else If the guessletter is in the randomWord {
Update the player's progress with the guess

}
}
}

Congratulate the player on guessing the correct word