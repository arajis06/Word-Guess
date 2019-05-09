// Array of Words to Randomly pick.
var wordBank = ["khole", "kylie", "kimberly", "kim", "kourtney",
                 "kendell", "kris", "rob", "robert", "dream"];
// Solution will be held here.
var randomWord = "";
// This will break the solution into individual letters to be in  stored in array.
var numLettersInRandomWord = [];
// This will be the number of blanks we show based on the solution.
var numofblanks = 0;
// Holds a mix of blank and solved lettersall of blank (ex. a,_,_,l,e).
var blanksAndSuccesses =[];
// Holds all of the wrong guesses
var wrongGuesses = []; 

// GAME COUNTER to keep track of scores============================
var winCounter = 0;  
var lossCounter = 0;         
var remainingGuesses = 10; 

// FUNCTIONS to run when needed!====================================
// Starting a new game function....
function playGame() {
// Resets the  guesses back to 0.
    remainingGuesses = 10;
// Selecting a random word from word bank
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// The word is broken into individual letters.
    numLettersInRandomWord = randomWord.split("");

// Counting the numbers of letteres in the word.
    numofblanks = numLettersInRandomWord.length;

// Prints the solution on webpage to test.
    console.log(randomWord);

// Resetting the guess and success array at each play.
    blanksAndSuccesses = [];
// Resetting of wrong guesses from previous play.
    wrongGuesses = [];  

// Filling the blanksAndSuccesses list with correct number of  blank underscores=====
    for (var i = 0; i < numofblanks; i++) {
        blanksAndSuccesses.push("_");
    }
    // Print the initial underscore blanks .
        console.log(blanksAndSuccesses);

// Reprints to webpage the remainingGuesses to 10.
    document.getElementById("remaining-attempts")
    .innerHTML = remainingGuesses;

// Prints on webpage underscore blanks at the beginning of each play.
    document.getElementById("empty-letter-blanks")
    .innerHTML = blanksAndSuccesses.join(" ")
}

// FUNCTION=========================================================--
// Matching the correct letters for words in the wordBank....
function checkLetters(letter) {
// This event will be called based on whether or not the player letter is found in the random word picked from array.
    var letterInWord = false;

//Checking if the letter exist inside the array.
    for (var i = 0; i < numofblanks; i++) {
        if (randomWord[i] === letter) {
            // If the letter exist then this event will be true.
            letterInWord = true;
        }
    }

// If the letter exist in the word, place the letter in correct spot in the random word.
    if (letterInWord) {

        // Loop through the random word chosen.
        for (var k = 0; j < numofblanks; k++) {
            if (randomWord[k] === letter) {
                // Setting proper space in blanks and letter equal to the letter when there is a match.
                blanksAndSuccesses[k] = letter;
            }
        }
        // Print to test.
        console.log(blanksAndSuccesses);
    }
    // If the letter doesn't exist...
    else {
        // ... then add the letter to the list of guessed wrong letters, and subtract one og the guesses.
        wrongGuesses.push(letter);
        remainingGuesses--;
    }
}
// FUNCTION===============================================
// playFinished() function...
// Code to be ran after each guess is made.
function playFinished() {
    //Print how many wins, losses, and guesses left.
    console.log("Wins: " + winCounter + " | Losses: " + lossCounter + " | RemainingGuesses: " + remainingGuesses);

// Update index.html to reflect the new numbers of guesses. And update right guesses.
document.getElementById("remaining-attempts")
.innerHTML = remainingGuesses;

// This will print the array of guesses and blanks onto the webpage.
document.getElementById("empty-letter-blanks")
.innerHTML = blanksAndSuccesses.join(" ");

// This will print the wrong guesses onto webpage.
document.getElementById("wrong-guesses")
.innerHTML = wrongGuesses.join(" ");

// If all the letters match the solution....
if (numLettersInRandomWord.toString() === blanksAndSuccesses.toString()) {
    //...add th the win counter and give the player an alert.
    winCounter++;
    alert("You Win!");

    // Now Update win counter in the index.html and restart game.
    document.getElementById("win-count")
    .innerHTML = winCounter;

    playGame();
    }

// If user runs out of guesses...
    else if (remainingGuesses === 0) {
        // Add to loss counter.
        lossCounter++;
        // Alert user they lost.
        alert("You Lose");

        // Update loss counter in the index.html.
        document.getElementById("loss-count")
        .innerHTML = lossCounter;

    // Restart game again.
    playGame();
    }

}

// Code to control what is run
// Starting the game by run function...
playGame();
// starts on key push event
document.onkeyup = function(event) {
    // Change all letters to lowercase letters
    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    // Run to check if correct...
    checkLetters(letterGuessed);
    // Run the code after each play is done.
    playFinished();

};





