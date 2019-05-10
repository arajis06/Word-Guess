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

// FUNCTION
function startGame() {
    // Picks random word from the wordBank.
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);

    for (var i = 0; i < randomWord.length; i++) {
        // Prints underscores on webpage
        underScores.push("_");
    }
    document.getElementById("empty-blanks").textContent = underScores.join(" ");

    // Reset
    wrongLetter = [];
    remainingGuesses = 10;

    // HTML
    document.getElementById("remaining-guesses").textContent = remainingGuesses;

}

document.onkeyup = function(event) {

    userGuesses = event.key.toLowerCase;
    // testing
    console.log(userGuesses);

    //Checking if the letter exist inside the array.
    if(randomWord.indexOf(userGuesses) > -1) {

    }
    else {
        wrongLetter.push(userGuesses);
        remainingGuesses--;
        // testing
        console.log(wrongLetter);
    }
}

// Main Game
startGame();


        if (randomWord[i] === letter) {
            // If the letter exist then this event will be true.
            letterInWord = true;
        }
    }
}



