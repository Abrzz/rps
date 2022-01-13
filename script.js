computerPlay = () => {

    let move = Math.floor(Math.random()*3)
    
    if (move===0) return "rock";
    else if (move===1) return "paper";
    else return "scissor";
    

 };

 

playRound = (computerSelection,playerSelection) => {

    if (playerSelection == computerSelection) return "Tie!";

    if (
        playerSelection == "rock" && computerSelection == "paper"
        ||
        playerSelection == "scissor" && computerSelection == "rock"
        ||
        playerSelection == "paper" && computerSelection == "scissor"
    ) return "you lose!"

    else return "you win!"

}


let button = document.querySelectorAll(".btn-container button")
let results = document.querySelector(".results")
let computerWins = 0;
let playerWins = 0;
let playAgainBtn;




button.forEach((e) => e.addEventListener('click', (e) => {

    let computerSelection = computerPlay()
    
    let aux = document.createElement("p")

    let winner = playRound(computerSelection,e.target.id);

    if (winner == "you win!") playerWins++;
    else if (winner == "you lose!") computerWins++;
    
    if (playerWins == 5) {
        aux.textContent = `You won the game! final result is: ${playerWins} - ${computerWins}`;
        
        }
    else if (computerWins == 5) {
        aux.textContent = `You lost the game! final result is: ${playerWins} - ${computerWins}`;
        }

    if (playerWins == 5 || computerWins == 5) {
        disableBtn()
        playAgainBtn = document.createElement("button")
        playAgainBtn.textContent = "Play Again!"
        playAgainBtn.addEventListener ('click', (e) => document.location.reload(true))
        results.insertBefore(playAgainBtn,results.firstChild)
    }
    else {
        aux.textContent = `${winner} current score is: ${playerWins} - ${computerWins}.`
    }
   
    results.appendChild(aux);
    
}))

disableBtn = () => {
    button.forEach((e) => e.disabled=true); 
}
