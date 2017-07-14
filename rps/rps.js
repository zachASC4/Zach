var playerChoice = prompt("Press 'r' for rock, 'p' for paper, and 's' for scissors.", "s");
var compChoice = Math.round(Math.random()*2);
var rounds = 3;
while (rounds >= 3){
    if (playerChoice != null){
        
    }
if (compChoice == 0){
    compchoice =="r";
}
else if (compChoice ==1){
    compchoice =="p";
}
else if (compChoice == 2){
    compchoice = "s";
}
if (playerChoice == compChoice){
    console.log("It was a tie!");
    rounds --;
    console.log("Would you like to play again? Press y for yes and n for no");
}
else if (playerChoice == "r" && compChoice =="p"){
    console.log("You Lost!");
    rounds --;
    console.log("Would you like to play again? Press y for yes and n for no");
}
else if (playerChoice =="r"&& compChoice == "s"){
    console.log("You Won!");
    rounds --;
    console.log("Would you like to play again? Press y for yes and n for no");
}
else if (playerChoice == "s" && compChoice == "r"){
    console.log("You Lost!");
    rounds --;
    console.log("Would you like to play again? Press y for yes and n for no");
}
else if(playerChoice == "s" && compChoice == "p"){
    console.log("You Won!");
}
else if (playerChoice == "p" && compChoice == "s"){
    console.log("You Lost");
    rounds --;
    console.log("Would you like to play again? Press y for yes and n for no");
}
else if (playerChoice == "p" && compChoice == "r" ){
    console.log("You Won!");
    rounds --;
    console.log("Would you like to play again? Press y for yes and n for no");
}
else if (window.prompt() != "r" || "p" || "s"){
    console.log("Not a valid input game over.")
}
}