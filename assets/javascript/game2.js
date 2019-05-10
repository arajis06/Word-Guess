// Global Variables
//============== Array of Words to Randomly pick.
var wordBank = ["khole", "kylie", "kimberly", "kim", "kourtney",
                 "kendell", "kris", "rob", "robert", "dream"];
var randomWord;
var winCounter = 0;  
var lossCounter = 0;  
var wrongLetter = [];       
var remainingGuesses = 10;
var underScores = [];
var userGuesses = [];
var lettersInRandomWord = [];
var blanksAndLetters = [];


// FUNCTION
function startGame() {
    // Picks random word from the wordBank.
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);

    // The word is broken into individual letters.
    lettersInRandomWord = randomWord.split(" ");

   // Counting the numbers of letteres in the word.
    underScores = lettersInRandomWord.length;
   // test
    console.log(randomWord);

    // Reset
    wrongLetter = [];
    remainingGuesses = 10;

    for (var i = 0; i < underScores.length; i++) {
        // Prints underscores on webpage
        blanksAndLetters.push("_");
    }
        // test
        console.log(blanksAndLetters);
        // Prints blanks at the beginning of each round.
        document.getElementById("empty-blanks").textContent = blanksAndLetters.join(" ");
        // test
        console.log(randomWord);


        // HTML
        document.getElementById("remaining-guesses").textContent = remainingGuesses.join(" ");

}
// User Guesses
document.onkeyup = function(event) {

    userGuesses = event.key.toLowerCase;
    //Checking if the letter exist inside the word.
    if(randomWord.indexOf(userGuesses) > -1) {

        for(var i = 0; i < randomWord.length; i++) {
            
            if(randomWord[i] === userGuesses) {
               underScores[i] = userGuesses;
               // Test
               console.log(underScores);
               winCounter++;
               winLose();
            }
        }
    }
            else {
               wrongLetter.push(userGuesses);
               remainingGuesses--;
               // test
               console.log(wrongLetter);
               winLose(); 

    }
}

function winLose() {
    if(winCounter === randomWord.length) {
        alert("WINNER !");
        startGame();
       }
       else if(remainingGuesses === 0) {
           alert("LOSER !");
           startGame();    
       }
    }

/* User Guesses
document.onkeyup = function(event) {

    userGuesses = event.key.toLowerCase;
    //Checking if the letter exist inside the word.
    if(randomWord.indexOf(userGuesses) > -1) {

        for(var i = 0; i < randomWord.length; i++) {
            
            if(randomWord[i] === userGuesses) {
               underScores[i] = userGuesses;
               // Test
               console.log(underScores);
               winCounter++;
               winLose();
            }
        }
    }
            else {
               wrongLetter.push(userGuesses);
               remainingGuesses--;
               // test
               console.log(wrongLetter);
               winLose(); 

    }
}

// Main Game
startGame();*/




