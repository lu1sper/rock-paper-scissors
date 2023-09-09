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
    player = player.toLowerCase();
    console.log(player);
    console.log(computer);
    if(computer === player){
        return 0;
    }else if(computer == "rock" && player == "paper"){
        return player;
    }else if(computer == "rock" && player == "scissors"){
        return computer;
    }else if(computer == "scissors" && player == "rock"){
        return player;
    }else if(computer == "scissors" && player == "paper"){
        return computer;
    }else if(computer == "paper" && player == "rock"){
        return computer;
    }else if(computer == "paper" && player == "scissors"){
        return player;
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        // let playerChoise = prompt("What's your choise");
        // let result = playTheGame(getComputerChoice(), playerChoise);
        if (result === 0){
            i--;
        }else if(result === "player"){
            playerWins++;
        }else{
            computerWins++;
        }
    }
    if (playerWins > computerWins){
        console.log("Player wins!");
    }else{
        console.log("Computer wins!");
    }


}

const btn = document. querySelector('button');
btn.addEventListener()


game();