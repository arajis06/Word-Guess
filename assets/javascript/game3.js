// Array of Words to Randomly pick.
var wordBank = ["khole", "kylie", "kimberly", "kim", "kourtney",
                 "kendell", "kris", "rob", "robert", "dream"];

var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//Creating empty answer Array.
var answerArray = [];
    for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = randomWord.length;

// MAIN GAME========================================================
var userGuesses = [];

// While there are letters left to be guessed.
    while (remainingLetters > 0) {
        // Show player progress.
          // Prints on webpage underscore blanks at the beginning of each play.
          document.getElementById("empty-letter-blanks")
          .textContent = answerArray.join(" ");

          // Get guess from player
          document.onkeyup = function(event) {

          userGuesses = event.key.toLowerCase();
         //  If player presses more than one letter or no letters. 
          if (userGuesses.length !== 1) {
              alert("Press a single letter on keyboard.");
          }
         // Update game with player guess.
          else {
              for (var k = 0; k < randomWord.length; k++) {
                //  If the letter guessed is in the current word. 
                if (randomWord[k] === userGuesses) {
                    // Update the answer array with the letter guessed.
                    answerArray[k] = userGuesses;
                    // If the letter doesn't exist in the word
                    // Subtract from remaining letters
                    remainingLetters--;
                }
              }
            }  
          
    }
// End of Game Loop=======================================================
}
