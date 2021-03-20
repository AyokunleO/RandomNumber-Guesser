let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

var humGuess = document.getElementById("human-guess");
humGuess.addEventListener("input", validate);

// Write your code below:
// function validate(){
//     if(document.getElementById("human-guess").value > 9){
//     } return alert("Number is out of range");

// }
// validate();


function generateTarget(){
    const randomNumber = Math.floor(Math.random() * 9);
    return randomNumber;
}

function compareGuesses(hum, com, sec){
if ((Math.abs(hum - sec) < Math.abs(com - sec)) || Math.abs(hum - sec)==Math.abs(com - sec)){
    return true;
}else {
    return false;
}
}

function updateScore(str){
    switch (str) {
        case "human":
            humanScore++;
            break;
    
        default:
            computerScore++;
            break;
    }
}

function advanceRound(){
    currentRoundNumber++;
}

function validate() {
    if(humGuess.value > 9 || humGuess.value < 0 || humGuess.value == ""){
        humGuess.value = 0;
        alert("Number is out of range"); 
    }
}
