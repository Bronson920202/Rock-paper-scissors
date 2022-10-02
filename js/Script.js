var playersChoiceToInt;
var AICoice;
var playerScore = 0;
var computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

const resualtTextDiv = document.querySelector('#displayResualt');




rock.addEventListener('click', () => {
    getRockChoice();
    getComputersChoice();
    createVisualChoice("Your choice: ", playersChoiceToInt);
    createVisualChoice("Computers choice: ", AICoice);
    createVisualResault(playersChoiceToInt, AICoice);
    // compareScore();
});
paper.addEventListener('click', () => {
    getPaperChoice();
    getComputersChoice();
    createVisualChoice("Your choice: ", playersChoiceToInt);
    createVisualChoice("Computers choice: ", AICoice);
    createVisualResault(playersChoiceToInt, AICoice);
    // compareScore();
});
scissor.addEventListener('click', () => {
    getScissorChoice();
    getComputersChoice();
    createVisualChoice("Your choice: ", playersChoiceToInt);
    createVisualChoice("Computers choice: ", AICoice);
    createVisualResault(playersChoiceToInt, AICoice);
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
}

function createVisualResault(playersChoice, compChoice) {
    const createResualtParagraph = document.createElement('p');
    resualtTextDiv.appendChild(createResualtParagraph);
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
