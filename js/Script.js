let roundsToPlay = 5;
let roundsPlayed = 0;
var playersChoiceToInt;
var AICoice;
var playerScore = 0;
var computerScore = 0;
var classNameCounter = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

const resualtTextDiv = document.querySelector('#displayResualt');



rock.addEventListener('click', () => {
    if(roundsPlayed === roundsToPlay) return compareScore();
    getRockChoice();
    getComputersChoice();
    createVisualChoice("Your choice: ", playersChoiceToInt);
    createVisualChoice("Computers choice: ", AICoice);
    createVisualResault(playersChoiceToInt, AICoice);
    roundsPlayed++;
    // compareScore();
});
paper.addEventListener('click', () => {
    if(roundsPlayed === roundsToPlay) return compareScore();
    getPaperChoice();
    getComputersChoice();
    createVisualChoice("Your choice: ", playersChoiceToInt);
    createVisualChoice("Computers choice: ", AICoice);
    createVisualResault(playersChoiceToInt, AICoice);
    roundsPlayed++;
    // compareScore();
});
scissor.addEventListener('click', () => {
    if(roundsPlayed === roundsToPlay) return compareScore();
    getScissorChoice();
    getComputersChoice();
    createVisualChoice("Your choice: ", playersChoiceToInt);
    createVisualChoice("Computers choice: ", AICoice);
    createVisualResault(playersChoiceToInt, AICoice);
    roundsPlayed++;
    // compareScore();
});






//Make function to get computers random choice

function getComputersChoice(computersChoice) {
    computersChoice = Math.random() * 3;
    let roundChoice = Math.round(computersChoice);

    if (roundChoice <= 0.4) {
        roundChoice = 1
    }
    AICoice = roundChoice;
    return AICoice;
}

//Make fucntion to get players choice

function getRockChoice() {
    return playersChoiceToInt = 1;
}
function getPaperChoice() {
    return playersChoiceToInt = 2;
}
function getScissorChoice() {
    return playersChoiceToInt = 3;
}


function createVisualChoice(string, choiceInNumber) {


    const createChoiceParagraph = document.createElement('p');
    resualtTextDiv.appendChild(createChoiceParagraph);
    if(classNameCounter % 2 === 0){
        createChoiceParagraph.className ="playerChoice";
    }
    else if(classNameCounter % 2 === 1){
        createChoiceParagraph.className ="computerChoice";
    }
    

    const choiceText = ["Rock", "Paper", "Scissor"];

    if (choiceInNumber === 1) {
        createChoiceParagraph.textContent = string + choiceText[0];
    }
    else if (choiceInNumber === 2) {
        createChoiceParagraph.textContent = string + choiceText[1];
    }
    else {
        createChoiceParagraph.textContent = string + choiceText[2];
    }
    classNameCounter++;
}

function createVisualResault(playersChoice, compChoice) {
    const createResualtParagraph = document.createElement('p');
    resualtTextDiv.appendChild(createResualtParagraph);
    createResualtParagraph.className = "resualtPara";
    if (playersChoice === compChoice){
        playerScore++;
        computerScore++;
        createResualtParagraph.textContent = "Its a draw!";
    }
    if (playersChoice > compChoice) {
        if (playersChoice === 3 && compChoice === 1) {
            computerScore++;
            createResualtParagraph.textContent = "You lose!";
        }
        else {
            playerScore++;
            createResualtParagraph.textContent = "You win!";
        }
        
    }
    if (playersChoice < compChoice) {
        if (playersChoice === 1 && compChoice === 3) {
            playerScore++;
            createResualtParagraph.textContent = "You win!";
        }
        else {
            computerScore++;
            createResualtParagraph.textContent = "You lose!";
        }
        
    }
        
}

//compare score
function compareScore() {
    let createFinalResualtPara = document.createElement('p');

    resualtTextDiv.appendChild(createFinalResualtPara);

    if (playerScore > computerScore) {
        createFinalResualtPara.textContent = "YOU ARE THE WINNER!"
    }
    if (playerScore < computerScore) {
        createFinalResualtPara.textContent = "YOU ARE THE LOSER!"
    }
    if (playerScore == computerScore) {
        createFinalResualtPara.textContent = "THE GAME IS DRAW"
    }


}
