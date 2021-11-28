var studentNames = [
    "khanum",
    "sabina",
    "akif",
    "murad",
    "emil",
    "xayyam",
    "xayal",
    "yashar"
];

var studentName = "";
var lettersInStudentName = [];
var wrongGuesses = []
var blanksAndSuccesses = []
var numBlanks = 0;
var wins = 0
var loss = 0
var guessesLeft = 9;


function newGame() {
    guessesLeft = 9;
    studentName = studentNames[Math.floor(Math.random() * studentNames.length)];
    lettersInStudentName = studentName.split("");
    numBlanks = lettersInStudentName.length;
    console.log(studentName);
    blanksAndSuccesses = [];
    wrongGuesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    console.log(blanksAndSuccesses);

    document.getElementById("guesses_left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("wordBlanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = "Wrong Guesses: " + wrongGuesses.join(' ');
}


function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (studentName[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (studentName[j] === letter) {
                blanksAndSuccesses[j] = letter;
            }

        }
        console.log(blanksAndSuccesses);

    } else {
        wrongGuesses.push(letter)
        guessesLeft--;
    }
}

function roundComplete() {

    console.log("Wins: " + wins + " //// Losses: " + loss + " /// Guesses left: " + guessesLeft);
    document.getElementById("guesses_left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("wordBlanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = "Wrong Guesses: " + wrongGuesses.join(' ');


    if (lettersInStudentName.toString() === blanksAndSuccesses.toString()) {
        wins++;
        newGame();
        alert("You win!");
        newGame();
        document.getElementById("wins").innerHTML = "Wins " + wins;
        newGame();
    } else if (guessesLeft === 0) {
        loss++;
        alert("Game Over!");
        document.getElementById("losses").innerHTML = "Losses " + loss;
        newGame();
    }
}
newGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
};