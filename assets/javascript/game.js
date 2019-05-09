// Array of Words to Randomly pick.
var wordBank = ["khole", "kylie", "kimberly", "kim", "kourtney", "kendell", "kris"];
// How to generate a word.
var pickedWord = "";
// This will break the solution into individual letters to be in  stored in array.
var lettersInPickedWord
var blankspace = [];       // current word
var wrongGuess = [];        //wrong letter guessed 
var guessesLeft = 10;  //how many chances left to play
var rightGuess = 0;         //right letter guessed
var wins = 0;           //number of wins
var guessedLetter = [];     //letters already played
var randomWord
var userGuesses

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