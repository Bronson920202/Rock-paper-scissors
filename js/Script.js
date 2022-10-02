var playersChoiceToInt;
var AICoice;
var playerScore = 0;
var computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');




rock.addEventListener('click',() => {
    getRockChoice();
    getComputersChoice();
    compareChoices();
    createVisualResualt();
    // compareScore();
} );
paper.addEventListener('click',() => {
    getPaperChoice();
    getComputersChoice();
    compareChoices();
    createVisualResualt();
    // compareScore();
} );
scissor.addEventListener('click',() => {
    getScissorChoice();
    getComputersChoice();
    compareChoices();
    createVisualResualt();
    // compareScore();
} );




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

    AICoice = roundChoice;
    return AICoice;
}

//Make fucntion to get players choice

function getRockChoice() {  
    console.log("you: rock");
    return playersChoiceToInt = 1;
}
function getPaperChoice(){
    console.log("you: paper");
    return playersChoiceToInt = 2;
}
function getScissorChoice(){
    console.log("you: scissor");
    return playersChoiceToInt = 3;
}
// Compare choices
function compareChoices() {
    if (playersChoiceToInt == AICoice) {
        playerScore++;
        computerScore++;
        console.log("It's a draw!")
        console.log(playersChoiceToInt,AICoice);
    }
    if (playersChoiceToInt > AICoice) {
        if (playersChoiceToInt === 3 && AICoice === 1) {
            computerScore++;
            console.log("you loose!")
        }
        else {
            playerScore++;
            console.log("you win!")
        }
        console.log(playersChoiceToInt,AICoice);
    }
    if (playersChoiceToInt < AICoice) {
        if (playersChoiceToInt === 1 && AICoice === 3) {
            playerScore++;
            console.log("you win!")
        }
        else {
            computerScore++;
            console.log("you loose!")
        }
        console.log(playersChoiceToInt,AICoice);
    }

}

function createVisualResualt(){
    const resualtTextDiv = document.querySelector('#displayResualt');

    const createResualtParagraph = document.createElement('p');   
    resualtTextDiv.appendChild(createResualtParagraph);

    createResualtParagraph.textContent = "hello";   
    
}

//compare score
function compareScore() {
    if (playerScore > computerScore) {
        console.log("You win the game!")
    }
    if (playerScore < computerScore) {
        console.log("You loose the game!")
    }
    if (playerScore == computerScore) {
        console.log("The game is draw!")
    }

}
