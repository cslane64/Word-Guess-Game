// variables
var wordBank = ["submarine", "dive", "torpedo", "deep", "silent", "sonar", "periscope", "missile" ];
var chosenWord = "";
var workingWord = [];
var wrongLetters = [];
var wins = 0;
var guessesLeft = 8;
var blankLines = 0;
var wordDisplay = [];

// functions
function startGame() {
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // populate the workingWord array
    for (i=0; i< chosenWord.length; i++) {
        workingWord.push(chosenWord[i]);
    }

    //set number of blank lines to be displayed on page at start of the game

    blankLines = workingWord.length;

    // populate array that will be displayed

    for (i = 0; i < workingWord.length; i++) {
        wordDisplay.push("___");
    }

    // reset all game counters

    guessesLeft = 8;
    wrongLetters = [];

    // populate html for start of game
    document.getElementById("lines").innerHTML = wordDisplay.join("    ");
    document.getElementById("score").innerHTML = wins;
    document.getElementById("bones").innerHTML = wrongLetters;
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}

    document.onkeyup = function(event) {
    var userGuess = event.key;
    var found = false;
    document.getElementById("ping").play();

    
    for (i = 0; i < chosenWord.length; i++) {
        if (userGuess == chosenWord[i]) {
            wordDisplay[i] = userGuess;
            found = true;
            document.getElementById("lines").innerHTML = wordDisplay.join("   ");  
        } 
    }
        if (!found) {
            wrongLetters.push(userGuess);
    }   

    for(i = 0; i < wrongLetters.length; i++) {
        if (userGuess == wrongLetters[i]) {
            wrongLetters[i]=userGuess;
            document.getElementById("bones").innerHTML = wrongLetters;
            guessesLeft --;
            document.getElementById("numGuesses").innerHTML = guessesLeft;
        }
    }









    console.log(userGuess);
    console.log(wordDisplay);
    console.log(chosenWord);
    console.log(guessesLeft);
    console.log(wrongLetters);
    


}

startGame();