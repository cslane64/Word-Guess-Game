Hangman-Game
Homework assignment 3 

Requirements
1.	Use key presses from the user to interact with the game
2.	Track correct and incorrect guesses and wins
3.	Display incorrect guess list and incorrect guess count
4.	When user wins increase win total and start begin the game again


Description
•	Press a letter to enter your guesses
•	You have 8 guesses to guess the correct word
•	If you succeed your win total increases. If you fail, a new word is selected and       you get another chance
•	Your wins and recorded on the screen


Technologies Used
•	HTML/CSS
•	JavaScript 
•	Bootstrap


Code Explanation
•   *** The colors on the interface are not random. Nuclear submarines have MANY radiation warnng signs onboard
    and they are yellow and Megenta. That is why I chose the colors that I did.
•	HTML & Bootstrap are used to create and place elements in the grid
•	A word bank is created and the computer selects a word randomly from that bank
•	A ‘mirror’ array is populated with underscores (one for each letter of theoriginal array) and            displayed to the screen to show the player how many letters        are in the word without revealing the word
•	The onKeyup event captures the user key press, checks to see if it is in the word selected. 
•	If the key pressed is in the word selected the DOM is updated to reflect the letter in the proper space in the word.
•	If the key pressed is not in the selected word, the letter is added to the wrong guess array and updated in the DOM
•	On wrong guesses the number of guesses is decremented and the DOM is updated to reflect this
•	When the number of guesses = 0, the game is over and the user loses
•	When the user guesses all the letters of the word correctly the game is over and the user wins. A new game will start and the Wins total is incremented by 1 and the updated in the DOM
•	CSS was used to add a more appealing visual aspect to the game
•	Audio, and visual effects were added to complement the theme

Live Link
https://cslane64.github.io/Word-Guess-Game/





