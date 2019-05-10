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

    for (var i = 0; i < randomWord.length; i++) {
        // Prints underscores on webpage
        underScores.push("_");
    }
        document.getElementById("empty-blanks").textContent = underScores.join(" ");
        // test
        console.log(underScores);

    // Reset
    wrongLetter = [];
    remainingGuesses = 10;

    // HTML
    document.getElementById("remaining-guesses").textContent = remainingGuesses;

}
function winLose() {
    if(winCounter === randomWord.length) {
        alert("WINNER !");
       }
       else if(remainingGuesses === 0) {
           alert("LOSER !");
       }
    }
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
    }
}

// Main Game
startGame();




