var playerScore = 0;
var computerScore = 0;

for (let index = 1; index <= 5; index++) {
    var yourChoice = getPlayersChoice();
    var AICoice = getComputersChoice();

    compareChoices();
    
}

compareScore();


//Make function to get computers random choice

function getComputersChoice(computersChoice) {
    computersChoice = Math.random() * 3;
    let roundChoice = Math.round(computersChoice);

    if (roundChoice <= 0.4) {
        roundChoice = 1
    }

    if (roundChoice === 1) {
        console.log("computer: rock");
    }
    if (roundChoice === 2) {
        console.log("computer: paper");
    }
    if (roundChoice === 3) {
        console.log("computer: scissor");
    }

    return roundChoice;
}

//Make fucntion to get players choice

function getPlayersChoice() {
    let playerChoice = prompt("rock, paper or scissor?");
    let playersChoiceToInt;

    if (playerChoice === "rock") {
        playersChoiceToInt = 1;
        console.log("you: rock");
        return playersChoiceToInt;
    }
    if (playerChoice === "paper") {
        playersChoiceToInt = 2;
        console.log("you: paper");
        return playersChoiceToInt;
    }
    if (playerChoice === "scissor") {
        playersChoiceToInt = 3;
        console.log("you: scissor");
        return playersChoiceToInt;
    }
    else {
        console.log("Must pick one of the options: rock, paper, scissor!")
        return
    }
}
// Compare choices
function compareChoices() {
    if (yourChoice == AICoice) {
        playerScore++;
        computerScore++;
        console.log("It's a draw!")
    }
    if(yourChoice > AICoice){
        if (AICoice == 1){
            computerScore++;
            console.log("you loose!")
        }
        else {
            playerScore++;
            console.log("you win!")
        }
        
    }
    if(yourChoice < AICoice){
        if (AICoice == 3){
            playerScore++;
            console.log("you win!")
        }
        else {
            computerScore++;
            console.log("you loose!")
        }
        
    }
    
}

//compare score
function compareScore(){
    if (playerScore > computerScore){
        console.log("You win the game!")
    }
    if (playerScore < computerScore){
        console.log("You loose the game!")
    }
    if (playerScore == computerScore){
        console.log("The game is draw!")
    }

}
