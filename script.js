function getComputerChoice(){
    const choices = ["rock","paper","scrissors"]
    const selection = choices[Math.floor(Math.random() * choices.length)]
    console.log(selection);
    return choices.indexOf(selection);
}

function getHumanChoice(){
    const choices = ["rock","paper","scrissors"]
    let userInput = prompt("please fill your value");
    userInput = userInput.trim().toLowerCase();
    if(choices.includes(userInput)){
        console.log(userInput);
        return choices.indexOf(userInput);
    }
    else{
        console.log("invalid values");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;
let counter = 1;
//method for play 1 round
function playRound(humanChoice, computerChoice) {
    // your code here!
    console.log(humanChoice, computerChoice);
    const choices = ["rock","paper","scrissors"]
    if(humanChoice == computerChoice){
        console.log("draw");
    }else if ((humanChoice > computerChoice) | (humanChoice == 0 && computerChoice == 2)){
        console.log( "You Win! "+ choices[humanChoice] + " beats " + choices[computerChoice] + ".");
        humanScore++;
        counter++;
    }else if ((humanChoice < computerChoice) | (humanChoice == 2 && computerChoice == 0)){
        console.log( "You Lose! "+ choices[computerChoice] + " beats " + choices[humanChoice] + ".");
        computerScore++;
        counter++;
    }
}
 
function playGame(){
    while(counter <= 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("ROUND " + (counter) + " START!!!");
        playRound(humanSelection, computerSelection);
        console.log("FINISHED ROUND " + (counter-1));
        console.log( "Human and Computer Score is "+ humanScore + " : " + computerScore);
    }
    console.log("Finished !!")
}

function updateScore(){
    document.getElementById("humanScore").innerHTML = `Your score is: ${humanScore}`;
    document.getElementById("computerScore").innerText = `Computer score is: ${computerScore}`;
}

updateScore();




