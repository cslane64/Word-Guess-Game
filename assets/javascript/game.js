// variables
    var wordBank = ["submarine", "dive", "torpedo", "deep", "silent", "sonar", "periscope", "missile", "nuclear", "diesel", "nautilus" ];
    var chosenWord = "";
    var allLetters = [];
    var workingWord = [];
    var wrongLetters = [];
    var wins = 0;
    var guessesLeft = 8;
    var wordDisplay = [];

//DOM Elements
    var domLines = document.getElementById("lines");
    var domScore = document.getElementById("score");
    var domBones = document.getElementById("bones");
    var domNumGuesses = document.getElementById("numGuesses");
// functions
function startGame() {
    wordDisplay = [];
    workingWord = [];
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    
// populate the workingWord array
    for (i=0; i< chosenWord.length; i++) {
        workingWord.push(chosenWord[i]);
    }
// populate array that will be displayed
    for (i = 0; i < chosenWord.length; i++) {
        wordDisplay.push("___");
    }

// reset all game counters

    guessesLeft = 8;
    wrongLetters = [];

// populate html for start of game DOM elements went here
    domLines.textContent = wordDisplay.join("   ");
    domScore.textContent = wins;
    domBones.textContent = wrongLetters;
    domNumGuesses.textContent = guessesLeft;
}
    
// start listening for user keystrokes
    document.onkeyup = function(event) {
    var userGuess = event.key;
    var found = false;
    document.getElementById("ping").play();
    
 // Check for users key stroke in the chosen word   
    
    for (i = 0; i < chosenWord.length; i++) {
        if (userGuess == chosenWord[i] && chosenWord.indexOf(userGuess === -1)) {
            wordDisplay[i] = userGuess,
            found = true,
            domLines.textContent = wordDisplay.join("   ")
        } 
    }

// Handle letters NOT in the chosen word
    if (!found && wrongLetters.indexOf(userGuess) === -1) {
        wrongLetters.push(userGuess);
        guessesLeft --;
        domNumGuesses.textContent = guessesLeft
    } 
           
// Populate the wrong letters geussed list
    for(i = 0; i < wrongLetters.length; i++) {
        if (userGuess == wrongLetters[i] ) {
            wrongLetters[i]=userGuess,
            domBones.textContent = wrongLetters
        }
    }

// Check for loss condition
    if (guessesLeft === 0) {
        if (confirm("You Lost. The word was " + chosenWord +".Would you like to play again?")) {
            startGame();
        }
        
    }

// Check for win condition 
    if (workingWord.join('') === wordDisplay.join('')) {
        wins++;
        domScore.textContent = wins;
        document.getElementById("dive").play();
        startGame();
    }
 }
startGame()