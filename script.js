let playerWins = 0;
let computerWins = 0;
let sourceOfRock = "images/rock.png";
let sourceOfPaper = "images/paper.png";
let sourceOfScissors = "images/scissors.png"
let sourceOfQuestionMark = "images/question-mark.png"

function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    if (x==0){
        return "rock";
    }else if(x===1){
        return "paper";
    }else{
        return "scissors";
    }
}

function playTheGame(computer, player){
    if(computer === player){
        return 0;
    }else if(computer == "rock" && player == "paper"){
        return "player";
    }else if(computer == "rock" && player == "scissors"){
        return "computer";
    }else if(computer == "scissors" && player == "rock"){
        return "player";
    }else if(computer == "scissors" && player == "paper"){
        return "computer";
    }else if(computer == "paper" && player == "rock"){
        return "computer";
    }else if(computer == "paper" && player == "scissors"){
        return "player";
    }
}

function game(playerChoise){
    let computersChoice = getComputerChoice();
    const playerWinUpdate = document.createElement('h3');
    playerWinUpdate.textContent = "Player wins this round!";
    const computerWinUpdate = document.createElement('h3');
    computerWinUpdate.textContent = "Computer wins this round!";
    const tieUpdate = document.createElement('h3');
    tieUpdate.textContent = "It's a tie!";

    if(computersChoice === "rock"){
        computerImgElement.src = sourceOfRock;
    }else if (computersChoice === "paper"){
        computerImgElement.src = sourceOfPaper;
    }else if (computersChoice === "scissors"){
        computerImgElement.src = sourceOfScissors;
    }
    let result = playTheGame(computersChoice, playerChoise);
    console.log("player:" + playerChoise);
    console.log("computer: " + computersChoice);
    
    
    if(result === "player"){
        playerWins++;
        playerScoreElement.textContent = playerWins;
        updates.innerHTML = '';
        updates.appendChild(playerWinUpdate);
    }else if (result === "computer"){
        computerWins++;
        computerScoreElement.textContent = computerWins;
        updates.innerHTML = '';
        updates.appendChild(computerWinUpdate);
    }else{
        updates.innerHTML = '';
        updates.appendChild(tieUpdate);
    }
    if (playerWins === 5){
        playerScoreElement.textContent = playerWins;
        updates.innerHTML = '';
        updates.innerHTML = 'Player wins the game! Refresh the page if you want to play again.';
    }
    if (computerWins === 5){
        computerScoreElement.textContent = computerWins;
        updates.innerHTML = '';
        updates.innerHTML = 'Computer wins the game! Refresh the page if you want to play again.';
        
    }
}



function handleClick(e) {
    const button = e.currentTarget;
    
    if (button.className === 'rock') {
        playerImgElement.src = sourceOfRock;
        game("rock");
    } else if (button.className === "paper") {
        playerImgElement.src = sourceOfPaper;
        game("paper");
    } else if (button.className === "scissors") {
        playerImgElement.src = sourceOfScissors;
        game("scissors");
    }
}

const buttons = document.querySelectorAll('button');
const updates = document.querySelector('#updates');

let playerImgElement = document.getElementById('player');
let computerImgElement = document.getElementById('computer');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
buttons.forEach((button) => {
    
    button.addEventListener('click', handleClick);
});

