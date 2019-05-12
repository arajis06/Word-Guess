// Array of Words to Randomly pick.
var wordBank = ["khole", "kylie", "kimberly", "kim", "kourtney",
                 "kendell", "kris", "rob", "robert", "dream"];
// Solution will be held here.
var randomWord = "";
// This will break the solution into individual letters to be in  stored in array.
var lettersInRandomWord = [];
// This will be the number of blanks we show based on the solution.
var numBlanks = 0;
// Holds a mix of blank and solved lettersall of blank (ex. a,_,_,l,e).
var blanksAndLetters = [];
// Holds all of the wrong guesses
var letterGuessed = []; 
var winCounter = 0;  
var lossCounter = 0;         
var remainingGuesses = 10; 

// FUNCTIONS to run when needed!====================================
// Starting the game.
function startGame() {
// Resets the  guesses back to 0.
    remainingGuesses = 10;

// Selecting a random word from word bank
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// The word is broken into individual letters.
    lettersInRandomWord = randomWord.split("");

// Counting the numbers of letteres in the word.
    numBlanks = lettersInRandomWord.length;

//  test...
    console.log(randomWord);

// Resetting the guess and success array at each play.
    blanksAndLetters = [];
// Resetting of wrong guessed letters from previous play.
    letterGuessed = [];  

// Filling the blanksAndLetters list with correct number of  blank underscores=====
    for (var i = 0; i < numBlanks; i++) {
        blanksAndLetters.push("_");
    }
    // test...
        console.log(blanksAndLetters);


// Reprints to webpage the remainingGuesses to 10.
    document.getElementById("remaining-guesses")
    .textContent = remainingGuesses;

// Prints on webpage underscore blanks at the beginning of each play.
    document.getElementById("blanks")
    .textContent = blanksAndLetters.join(" ");

// Remove guesses from previous play.
    document.getElementById("guessed-letters")
    .textContent = letterGuessed.join(" ");
}

// FUNCTION=========================================================--
// Matching the correct letters for words in the wordBank....
function checkLetters(letter) {
// This event will be called based on whether or not the player letter is found in the random word picked from array.
  var letterInWord = false;

//Checking if the letter exist inside the array.
    for (var i = 0; i < numBlanks; i++) {
        if (randomWord[i] === letter) {
            // If the letter exist then this event will be true.
            letterInWord = true;
        }
    }

// If the letter exist in the word, place the letter in correct spot in the random word.
    if (letterInWord) {

        // Loop through the random word chosen.
        for (var k = 0; k < numBlanks; k++) {
            if (randomWord[k] === letter) {
                // Setting proper space in blanks and letter equal to the letter when there is a match.
                blanksAndLetters[k] = letter;
            }
        }
     console.log(blanksAndLetters);
    }
    // If the letter doesn't exist...
    else {
        // ... then add the letter to the list of guessed wrong letters, and subtract one og the guesses.
        letterGuessed.push(letter);
        remainingGuesses--;
    }
}
// FUNCTION===============================================

function roundComplete() {
    //Print how many wins, losses, and guesses left.
    console.log("Wins: " + winCounter + " | Losses: " + lossCounter + " | RemainingGuesses: " + remainingGuesses);

// Update index.html to reflect the new numbers of guesses. And update right guesses.
document.getElementById("remaining-guesses")
.textContent = remainingGuesses;

// This will print the array of guesses and blanks onto the webpage.
document.getElementById("blanks")
.textContent = blanksAndLetters.join(" ");

// This willprint wrong guesses
document.getElementById("guessed-letters")
.textContent = letterGuessed;


// If all the letters match the solution....
if (lettersInRandomWord.toString() === blanksAndLetters.toString()) {
    //...add th the win counter and give the player an alert.
    winCounter++;
    alert("WINNER!");

    // Now Update win counter in the index.html and restart game.
    document.getElementById("win-count")
    .textContent = winCounter;

    startGame();
    }

// If user runs out of guesses...
    else if (remainingGuesses === 0) {
        // Add to loss counter.
        lossCounter++;
        // Alert user they lost.
        alert("LOSER!");

        // Update loss counter in the index.html.
        document.getElementById("loss-count")
        .textContent = lossCounter;

    // Restart game.
    startGame();
    }

}

// MAIN process=======================
// Starting the game by run function...
startGame();
// starts on key push event
document.onkeyup = function(event) {
    // Change all letters to lowercase letters
    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    // var letterGuessed = event.key.toLowerCase()
    // Run to check if correct...
    checkLetters(letterGuessed);
    // Run the code after each play is done.
    roundComplete();

};

